<template>
  <div>
    <div class="formItem">
      <label v-if="label">{{label}}</label>
      <slot></slot>
      <p v-if="err">{{err}}</p>
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator'
import emitter from '../../mixin/emitter'
export default {
  name: 'EformItem',
  componentName: 'EformItem',
  inject: ['form'],
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      err: '',
      validator: ''
    }
  },
  mounted () {
    this.$on('validator', () => {
      this.validator()
    })
    if (this.prop) {
      this.dispatch('Eform', 'addField', [this])
    }
  },
  methods: {
    validate () {
      if (this.prop) {
        // const rules = this.form.rules[this.prop]
        // const descriptor = {
        //   [this.prop]: rules
        // }
        // var Schema2 = new Schema(descriptor)
        // const name = this.form.mode[this.prop]
        // return Schema2.validate({ [this.prop]: name }, (err) => {
        //   console.log(err)
        //   if (err) {
        //     this.err = err[0].message
        //     return false
        //   } else {
        //     this.err = ''
        //     return true
        //   }
        // })
        // 规则
        const rules = this.form.rules[this.prop]
        // 当前值
        const value = this.form.mode[this.prop]

        // 校验描述对象
        const desc = { [this.prop]: rules }
        // 创建Schema实例
        const schema = new Schema(desc)
        return schema.validate({ [this.prop]: value }, errors => {
          if (errors) {
            this.error = errors[0].message
          } else {
          // 校验通过
            this.error = ''
          }
        })
      }
    }
  },
  destroyed () {
    if (this.props) {
      this.broadcast('Eform', 'removeField', [this])
    }
  }
}
</script>

<style>

</style>
