<template>
  <div>
    <eform :mode="mode" ref="eform" :rules="rules">
      <eform-item label="账号" prop="username">
        <einput placeholder="请输入账号密码" v-model="mode.username"></einput>
      </eform-item>
      <eform-item label="密码" prop="password">
        <einput
          type="password"
          v-model="mode.password"
          placeholder="请输入密码"
        ></einput>
      </eform-item>
      <eform-item>
        <button @click="submit">登录</button>
      </eform-item>
    </eform>
    <!-- <notice :isShow="ishow">
     <template #title>友情提醒</template>
     <template #content>{{content}}</template>
    </notice> -->
  </div>
</template>

<script>
import einput from './Einput'
import eformItem from './EformItem'
import eform from './Eform'
import Notice from '../notice/index'
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
        username: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      ishow: false
    }
  },
  methods: {
    submit () {
      this.$refs.eform.validate((valid) => {
        console.log(valid)
        const notice = this.$create(Notice, {
          title: '搬砖啦',
          content: valid ? '校验通过' : '校验失败',
          duration: 5000
        })
        notice.show()
        // if (valid) {
        //   this.content = '校验通过'
        //   this.ishow = true
        // } else {
        //   this.content = '校验失败'
        //   this.ishow = true
        // }
      })
    },
    shut () {
      this.ishow = false
    }
  }
}
</script>

<style></style>
