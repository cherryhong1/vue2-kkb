<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Communication />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Communication from './Communication.vue'
export default {
  name: 'Home',
  provide () {
    return {
      grandParent: this
    }
  },
  data () {
    return {
      title: '我是组父组件home'
    }
  },
  components: {
    // HelloWorld,
    Communication
  },
  methods: {
    changeTitle () {
      this.title = '我不满意我的title'
    }
  }
}
</script>
