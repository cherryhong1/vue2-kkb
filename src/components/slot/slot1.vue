<template>
  <div>
    <p class="title"  @click="onclick">
      <slot name="header" v-bind:headerSlot="headerSlot"></slot>
      <slot name="contain"></slot>
      <slot name="foot" v-bind:user="user">
        {{user.userName}}
      </slot>
     <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'slot1',
  data () {
    return {
      user: {
        userName: 'lili'
      },
      headerSlot: {
        name: '头部插槽'
      }

    }
  },
  methods: {
    onclick () {
      this.user.userName = 'hauhua'
    }
  }
}
</script>

<style>

</style>
