<template>
  <div>
      <input :type="type" :value="value" @input="onInput" :placeholder="placeholder"  v-bind="$attrs">

  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      require: true
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput (e) {
      this.$emit('onInput', e.target.value)
    }
  }
}
</script>

<style>

</style>
