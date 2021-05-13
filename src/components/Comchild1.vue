<template>
  <div class="child1">
    <p class="title" @click="onClickTitle">{{ title }}</p>
    <p class="content">{{ parent.content }}</p>
    <p>{{ grandParent.title }}</p>
    <p>{{ question }}</p>
    <p>{{ $attrs.title}}</p>
    <button @click="grandParent.changeTitle">改变home组件的title</button>
  </div>
</template>

<script>
import Event from '@/utils/event'
export default {
  inheritAttrs: true,
  inject: ['parent', 'grandParent'],
  data () {
    return {
      title: '我是子组件1',
      question: ''
    }
  },
  methods: {
    onClickTitle () {
      this.title = '我是子组件1---我被点击了'
      this.$emit('onClickTitle')
    }
  },
  mounted () {
    // console.log(this.$attrs)
    // console.log(this.$listeners)
    Event.$on('send', (sendTitle) => {
      this.question = sendTitle
    })
  }
}
</script>

<style lang="scss" scoped>
.child1 {
  border: 1px solid #378888;
  padding: 10px;
}
</style>
