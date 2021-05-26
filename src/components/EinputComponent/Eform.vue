<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import emitter from '../../mixin/emitter'
export default {
  name: 'Eform',
  componentName: 'Eform',
  provide () {
    return {
      form: this
    }
  },
  mixins: [emitter],
  props: {
    mode: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data () {
    return {
      fields: []
    }
  },
  created () {
    this.$on('addField', item => {
      this.fields.push(item)
    })
    this.$on('removeField', item => {
      console.log(item)
      this.fields.splice(this.fields.indexof(item), 1)
    })
  },
  methods: {
    validate (cb) {
      const tasks = this.fields.map(item => {
        item.validate()
      })
      // const tasks = this.$children
      //   .filter(item => item.prop) // 过滤掉没有prop属性的Item
      //   .map(item => item.validate())
      const flag = true
      const flag2 = false
      // 统一处理所有Promise结果
      Promise.all(tasks)
        .then(() => {
          cb(flag)
        })
        .catch(() => {
          cb(flag2)
        })
    }

  }
}
</script>

<style ></style>
