<template>
  <div ref="comminication">
    <p>{{ title }}</p>
    <comchild-1
      @onClickTitle="onClickTitle"
      :title="title"
      :content="content"
    ></comchild-1>
    <comchild-2 :msg="content" ref="child2"></comchild-2>
  </div>
</template>

<script>
import Comchild1 from '../components/Comchild1.vue'
import Comchild2 from '../components/Comchild2.vue'
export default {
  components: { Comchild1, Comchild2 },
  provide () {
    return {
      parent: this
    }
  },
  data () {
    return {
      title: '我是父组件',
      content: '父子组件通信'
    }
  },
  mounted () {
    // console.log(this.$parent);
    // console.log(this.$children)
    // console.log(this.$root)
    // console.log(this.$refs.comminication);
    this.$refs.child2.send()
  },
  methods: {
    onclick () {
      console.log('title被点击了')
    },
    onClickTitle () {
      console.log('emmit')
    }
  }
}
</script>

<style></style>
