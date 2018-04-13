<template>
  <div id="app">
    <expandable-modal></expandable-modal>
  </div>
</template>

<script>
  import ExpandableModal from './ExpandableModal.vue'
  export default {
    name: 'CimationRoot',
    components: {
      ExpandableModal
    }
  }
</script>

<style>
  body {
    font: 16px/1.4 -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    padding: 16px;
  }
</style>
