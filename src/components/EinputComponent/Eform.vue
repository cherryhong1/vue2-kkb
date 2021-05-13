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
    submit () {
      console.log('提交')
    },
    cancel () {
      console.log('')
    }
  }
}
</script>

<style></style>
