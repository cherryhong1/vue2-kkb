<template>
  <div>
    <p class="title">{{ title }}</p>
    <slot1>
      测试插槽
      <template v-slot:header="{ headerSlot }">
        <div class="header">
        我是头部 ----{{headerSlot.name}}
        </div>
      </template>
      <template v-slot:contain>
        <div class="contain">
          我是内容
        </div>
        </template>
      <template #foot="slotProps">
        <div class="foot">
          <p>{{slotProps.userName}}</p>
          <p v-for="item in todo" :key="item.id">{{item.text}}</p>
        </div>
        </template>
    </slot1>
    <slot2></slot2>
  </div>
</template>

<script>
import slot1 from '../components/slot/slot1'
import slot2 from '../components/slot/slot2'
export default {
  components: {
    slot1,
    slot2
  },
  data () {
    return {
      title: '插槽实例',
      todo: [
        { id: 0, text: 'todo1' },
        { id: 1, text: 'todo2' }
      ]
    }
  }
}
</script>

<style>

</style>
