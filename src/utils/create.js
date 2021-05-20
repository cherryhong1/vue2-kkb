// import Vue from 'vue'
// function createComponent (component, props) {
//   const vm = new Vue({
//     render: (h) => h(component, { props })
//   }).$mount()

//   document.body.append(vm.$el)
//   const comp = vm.$children[0]
//   console.log(vm.$children[0])
//   comp.remove = function () {
//     document.body.removeChild(vm.$el)
//     vm.$destroy()
//   }
//   return comp
// }
// export default createComponent

import Vue from 'vue'

function create (Component, props) {
  // 组件构造函数如何获取？
  // 1.Vue.extend()
  const Ctor = Vue.extend(Component)
  const CompExtend = new Ctor({ propsData: props }).$mount()
  console.log(CompExtend)
  document.body.appendChild(CompExtend.$el)
  CompExtend.remove = function () {
    document.body.removeChild(CompExtend.$el)
    CompExtend.$destroy()
  }
  return CompExtend
  // 2.render
  // const vm = new Vue({
  //   // h是createElement, 返回VNode，是虚拟dom
  //   // 需要挂载才能变成真实dom
  // https://cn.vuejs.org/v2/guide/render-function.html
  //   render: h => h(Component, { props })
  // }).$mount() // 不指定宿主元素，则会创建真实dom，但是不会追加操作

  // // 获取真实dom
  // document.body.appendChild(vm.$el)

  // const comp = vm.$children[0]

  // // 删除
  // comp.remove = function () {
  //   document.body.removeChild(vm.$el)
  //   vm.$destroy()
  // }

  // return comp
}

export default create
