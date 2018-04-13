<template>
  <div class="expandable-modal" :class="{'expanded' : expanded}">
    <div class="thumbnail" @click="open">Open</div>
    <div class="expanded-content">
      <ul class="content">
        <li class="item">1. Minimalist (Web)</li>
        <li class="item">2. Google Tasks (Web, Desktop, Mobile)</li>
        <li class="item">3. MinimaList (iOS)</li>
        <li class="item">4. A Text File (Desktop, Web, Mobile)</li>
        <li class="item">5. Slack (Desktop, Web, Mobile)</li>
        <li class="item">6. A Spreadsheet (Desktop, Web, Mobile)</li>
        <li class="item">7. Paper and Pen</li>
        <li class="item">8. Mobile Versions of Outlining and Note-Taking Apps</li>
      </ul>
      <div class="close" @click="close">Close</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'expandable-modal',

    data() {
      return {
        expanded: false
      }
    },

    methods: {
      open() {
        this.expanded = true
      },
      close() {
        this.expanded = false
      }
    }
  }
</script>

<style lang="scss">
  .expandable-modal {
    position: relative;
    width: 10px;
    height: 10px;
    color: white;
    .thumbnail {
      width: 80px;
      line-height: 80px;
      text-align: center;
      height: 80px;
      background-color: #E75973;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }
    .expanded-content {
      box-sizing: border-box;
      width: 80px;
      height: 80px;
      padding: 16px;
      border-radius: 50%;
      transition: all .5s;
      letter-spacing: 1px;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: -1px 1px 1px 0 rgba(0, 0, 0, 0.05), 0 10px 20px 0 rgba(0, 0, 0, 0.15);
      visibility: hidden;
      pointer-events: none;
      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }
      .content {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 284px;
        height: 484px;
        padding: 30px 16px;
        list-style: none;
        .item {
          font-weight: lighter;
          line-height: 40px;
          border-bottom: 1px solid #938691de;
        }
      }
      .close,
      .content {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: all .5s;
        transform: scale(0.2);
        transform-origin: 0px 0px;
        overflow: scroll;
      }
    }
    &.expanded {
      .expanded-content {
        width: 300px;
        height: 500px;
        background-color: #938691;
        visibility: visible;
        pointer-events: inherit;
        border-radius: 0;
        .close, .content {
          opacity: 1;
          visibility: visible;
          pointer-events: inherit;
          transform: scale(1);
        }
      }
    }
  }
</style>
