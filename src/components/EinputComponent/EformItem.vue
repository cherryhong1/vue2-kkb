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
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      err: ''
    }
  }
}
</script>

<style>

</style>
