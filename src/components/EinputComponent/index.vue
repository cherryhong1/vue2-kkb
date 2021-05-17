<template>
  <div>
    <eform :mode="mode" ref="eform" :rules="rules">
      <eform-item label="账号" prop="username">
        <einput placeholder="请输入账号密码" v-model="mode.username"></einput>
      </eform-item>
      <eform-item label="密码" prop="password">
        <einput type="password" v-model="mode.password" placeholder="请输入密码"></einput>
      </eform-item>
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
  data () {
    return {
      mode: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.eform.validate((valid) => {
        if (valid) {
          console.log('提交成功')
        } else {
          console.log('提交失败')
        }
      })
    }
  }
}
</script>

<style>

</style>
