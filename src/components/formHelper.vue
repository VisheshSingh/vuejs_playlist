<template>
  <header>
    <slot name="title"></slot>
    <h1>I am a form helper</h1>
    <slot name="para"></slot>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
