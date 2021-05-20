<template>
  <div v-if="isShow" class="notice">
    <!-- <p class="title">
      <slot name="title"></slot>
    </p>
    <p class="content">
      <slot name="content"></slot>
    </p> -->
    <p class="title">{{title}}</p>
    <p class="content">{{content}}</p>
    <div class="shut" @click="shut">x</div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 200
    },
    title: {
      type: String,
      default: '温馨提示'
    },
    content: {
      type: String
      // required: true
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    shut () {
      this.isShow = false
      this.remove()
    },
    show () {
      this.isShow = true
      setTimeout(() => {
        this.shut()
      }, this.duration)
    }
  }
}
</script>

<style lang="scss" scoped>
.notice{
  position:absolute;
  right: 10px;
  top: 0;
  width: 200px;
  height: 200px;
  border: 1px solid #565656;
}
.notice .title{
  line-height: 25px;
  font-size: 20px;
}
.notice .content{
  border-top: 1px solid #e4e4e4;
  line-height: 23px;
  font-size: 18px;
  text-indent: 2em;
}
.notice .shut{
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>
