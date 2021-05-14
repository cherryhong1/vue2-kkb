<template>
  <div>
    <eform :mode="mode" ref="eform" :rules="rules">
      <eform-item label="账号" prop="username">
        <einput placeholder="请输入账号密码" v-model="mode.username"></einput>
      </eform-item>
      <eform-item label="密码" prop="password">
        <einput type="password" v-model="mode.password"></einput>
      </eform-item>
      <p>{{mode.username}}</p>
      <eform-item>
        <button @click="submit">登录</button>
      </eform-item>
    </eform>
  </div>
</template>

<script>
import einput from './Einput'
import eformItem from './EformItem'
import eform from './Eform'
export default {
  components: {
    einput,
    eformItem,
    eform
  },
  provide () {
    return {
      eform: this
    }
  },
  data () {
    return {
      mode: {
        username: '234',
        password: ''
      },
      rules: {
        username: [],
        password: []
      }
    }
  },
  methods: {
    submit () {
      console.log('提交')
      console.log(this.mode)
    }
  }
}
</script>

<style>

</style>
