<template>
  <v-client-table :columns="columns" :data="data" :options="options"></v-client-table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      default: []
    },
    options: {
      type: Object
    }
  }
}
</script>
