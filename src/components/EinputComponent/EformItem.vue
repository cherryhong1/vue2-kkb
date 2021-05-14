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
export default {
  inject: ['form'],
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
  created () {
    console.log(11)
    console.log(this.prop)
    const rules = this.form[this.props]
    console.log(rules)
    const descriptor = {
      rules
    }
    var validator = new Schema(descriptor)
    const name = this.form[this.prop]
    console.log(name)
    validator.validate(name, (err) => {
      if (err) {
        console.log(err)
      }
    })
  }
}
</script>

<style>

</style>
