<template>
  <div>
    <h1>Weather forecast</h1>

    <p>This component demonstrates fetching data from the server.</p>

    <div v-if="!forecasts.length" class="text-center">
      <p>
        <em>Loading...</em>
      </p>
      <h1>
        <icon icon="spinner" pulse/>
      </h1>
    </div>

    <template v-if="forecasts.length">
      <base-table :columns="columns" :data="forecasts" :options="options" />
      <nav aria-label="...">
        <ul class="pagination justify-content-center">
          <li :class="'page-item' + (currentPage == 1 ? ' disabled' : '')">
            <a class="page-link" href="#" tabindex="-1" @click="currentPage--">Previous</a>
          </li>
          <li
            :class="'page-item' + (n == currentPage ? ' active' : '')"
            v-for="(n, index) in totalPages"
            :key="index"
          >
            <a class="page-link" href="#" @click="loadPage(n)">{{n}}</a>
          </li>
          <li :class="'page-item' + (currentPage < totalPages ? '' : ' disabled')">
            <a class="page-link" href="#" @click="currentPage++">Next</a>
          </li>
        </ul>
      </nav>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseTable from '../components/base/BaseTable'

export default {
  name: 'FetchData',
  components: {
    BaseTable
  },
  data() {
    return {
      columns: ["dateFormatted", "temperatureC", "temperatureF", "summary"],
      options: {
        headings: {
          dateFormatted: "Date",
          temperatureC: "Temp (C)",
          temperatureF: "Temp (F)",
          summary: "Summary"
        },
        sortable: ["date", "temperatureC", "temperatureF"],
        filterable: ["dateFormatted", "temperatureC", "temperatureF", "summary"]
      },
      pageSize: 5,
      currentPage: 1
    };
  },
  computed: {
    ...mapState({
      forecasts: state => state.weather.forecasts,
      total: state => state.weather.total
    }),
    totalPages() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  watch: {
    currentPage: {
      handler: 'loadPage',
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      fetchData: 'weather/fetchForecasts'
    }),
    loadPage(page) {
      this.currentPage = page
      const from = (page - 1) * this.pageSize
      this.fetchData({
        from,
        to: from + this.pageSize
      })
    }
  }
}
</script>
