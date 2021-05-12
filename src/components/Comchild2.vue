<template>
  <div class="child2">
    <p>子组件2</p>
    <p @click="send">{{msg}}</p>
    <p>{{ $attrs }}</p>
    <child-3 v-bind="$attrs"></child-3>
  </div>
</template>

<script>
import Event from '@/utils/event'
import Child3 from './Child3.vue'
export default {
  components: { Child3 },
  props: {
    msg: {
      type: String,
      default: '我是父组件传递过来的'
    }
  },
  data () {
    return {
      sendTitle: '我想进行兄弟之间通信？'
    }
  },
  methods: {
    send () {
      Event.$emit('send', this.sendTitle)
    }
  }
}
</script>

<style lang="scss" scoped>
.child2{
  border:1px solid #888;
  margin-top: 10px;
}

</style>
