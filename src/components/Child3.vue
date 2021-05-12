<template>
  <div class="child3">
    <p>我是孙子组件</p>
    <p>{{ $attrs }}</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.child3{
  border: 1px solid #779;
  margin-top: 10px;
}
</style>
