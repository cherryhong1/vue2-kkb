<template>
  <div>
      <input :type="$attrs.type" :value="value" @input="onInput" :placeholder="$attrs.placeholder"  v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      require: true
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  created () {
    console.log(this.form.rules)
  }
}
</script>

<style scoped>
input{padding: 10px;margin:10px}
</style>
