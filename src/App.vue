<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greet() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue is fun!'
    }
  },
  methods: {
    greet() {
      return 'heyaa cowboys!'
    }
  }
}
</script>

<style>

</style>
