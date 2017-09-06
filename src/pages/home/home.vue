<template>
  <div class="mage-home">
    <h3>Notifications</h3>
    <notifications></notifications>

    <h3>Notifications</h3>
    <notifications></notifications>
  </div>
</template>

<script>
  import { notifications } from '../components'
  export default {
    name: 'home',
    components: {
      notifications
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="sass">
  .mage-home
    h3
      border-left: 4px solid #324057
      color: #324057
      padding-left: 20px
      margin: 20px 0
      &:not(:first-child)
        position: relative
        margin-top: 40px

</style>

