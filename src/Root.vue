<template>
  <div id="app">
    <div class="header">CNIMATION</div>
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

<style lang="scss">
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
    .header {
      letter-spacing: 5px;
      font-weight: 200;
      font-size: 50px;
      height: 140px;
      line-height: 140px;
      max-width: 1010px;
      margin: 0 auto;
      top: 0;
      left: 0;
      text-align: center;
      color: #232020;
      background-color: #F7F8F4;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
</style>
