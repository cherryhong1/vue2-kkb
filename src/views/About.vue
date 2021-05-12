<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-if="isLogin">{{userName}}</h2>
    <!-- <p>{{isLogin}}</p> -->
    <button @click="login" v-if="!isLogin">登录</button>
    <button @click="logout" v-else>注销</button>
    <h3 v-if="isLogin">{{ wel }}</h3>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'About',
  data () {
    return {
      userName: ''
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin
    }),
    ...mapGetters('user', {
      wel: 'welcome'
    })
  },
  methods: {
    login () {
      // console.log(this.$store)
      this.$store.dispatch('user/login', 'admin')
    },
    logout () {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>
