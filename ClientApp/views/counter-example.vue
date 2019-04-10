<template>
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a Vue.js component & Vuex</p>

    <p>
      Current count (Vuex):
      <strong>{{ count }}</strong>
    </p>
    <p>
      Auto count:
      <strong>{{ autoCount }}</strong>
    </p>

    <button type="button" class="btn btn-primary" @click="incrementCounter()">Increment</button>
    <button type="button" class="btn btn-secondary" @click="resetCounter()">Reset</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Counter',
  data() {
    return {
      autoCount: 0
    };
  },
  computed: {
    ...mapState({
      count: state => state.counter.counter
    })
  },
  created() {
    setInterval(() => {
      this.autoCount += 1
    }, 1000)
  },
  methods: {
    incrementCounter() {
      this.$store.commit('counter/SET_COUNTER', this.count + 1)
    },
    resetCounter() {
      this.$store.commit('counter/SET_COUNTER', 0)
      this.autoCount = 0
    }
  }
}
</script>
