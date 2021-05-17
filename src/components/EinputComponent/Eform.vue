<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      form: this
    }
  },
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

    }
  },
  methods: {
    validate (cb) {
      const tasks = this.$children
        .filter(item => item.prop) // 过滤掉没有prop属性的Item
        .map(item => item.validate())

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
