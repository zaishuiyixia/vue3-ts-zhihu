## 本 repo 为初始 Vue3 源代码

本 repo 为初始 vue3 源代码，vue3学习代码，其他分支代码说明：

main分之，项目代码

typescript-basic 分之，TypeScript学习代码

### Vue3的性能提升

- 打包大小减少41%
- 初次渲染快55%，更新快133%
- 内存的使用减少54%

得益于重写了虚拟DOM的实现和Tree Shaking的优化


### defineComponent 作用
defineComponent 本身的功能很简单，但是最主要的功能是为了 ts 下的类型推到。对于一个 ts 文件，如果我们直接写
```
export default {}
```

这个时候，对于编辑器而言，{} 只是一个 Object 的类型，无法有针对性的提示我们对于 vue 组件来说 {} 里应该有哪些属性。但是增加一层 defineComponet 的话，
```
export default defineComponent({})
```

这时，{} 就变成了 defineComponent 的参数，那么对参数类型的提示，就可以实现对 {} 中属性的提示，还可以进行对参数的一些类型推导等操作。

但是上面的例子，如果你在 vscode 的用 .vue 文件中尝试的话，会发现不写 defineComponent 也一样有提示。这个其实是 Vetur 插件进行了处理。

### setup接收的两个参数props和context

props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。在props中定义了的外部传进来的参数会放在setup的props中

在setup()的this 是不指向当前实例的(this为undefined)，如果想使用使用$emit的功能，需要借助setup(props, context)中的context

context：上下文对象，暴露了以前在 this 上暴露的 三个 property：

- attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 this.$attrs。
- slots: 收到的插槽内容, 相当于 this.$slots。
- emit: 分发自定义事件的函数, 相当于 this.$emit。

### emits

类型：Array<string> | Object

vue3 可以通过 emits 选项来定义组件可触发的事件

emits 可以是数组或对象，从组件触发自定义事件，emits 可以是简单的数组，也可以是对象，后者允许配置事件验证。

在对象语法中，每个 property 的值可以为 null 或验证函数。验证函数将接收传递给 $emit 调用的其他参数。如果 this.$emit('foo',1) 被调用，foo 的相应验证函数将接收参数 1。验证函数应返回布尔值，以表示事件参数是否有效。