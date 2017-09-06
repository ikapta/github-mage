<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
  html, body
    height: 100vh
    overflow-y: auto
    margin: 0
    padding: 0
    *
      margin: 0
      padding: 0

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    padding: 20px

</style>
