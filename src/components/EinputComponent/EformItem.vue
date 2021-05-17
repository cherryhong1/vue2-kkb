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
  mounted () {
    this.$on('validator', () => {
      this.validator()
    })
  },
  methods: {
    validate () {
      if (this.prop) {
        const rules = this.form.rules[this.prop]
        const descriptor = {
          [this.prop]: rules
        }
        var Schema2 = new Schema(descriptor)
        const name = this.form.mode[this.prop]
        Schema2.validate({ [this.prop]: name }, (err) => {
          if (err) {
            this.err = err[0].message
          } else {
            this.err = ''
          }
        })
      }
    }
  }
}
</script>

<style>

</style>
