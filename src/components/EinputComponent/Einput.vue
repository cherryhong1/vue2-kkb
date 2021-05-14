<template>
  <div>
      <input :type="$attrs.type" :value="value" @input="onInput" :placeholder="$attrs.placeholder"  v-bind="$attrs">
      <p>{{value}}</p>
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
    }
    // placeholder: {
    //   type: String,
    //   default: '请输入'
    // },
    // type: {
    //   type: String,
    //   default: 'text'
    // }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>
