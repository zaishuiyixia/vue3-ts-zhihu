# vue3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 使用bootstrap样式库
```
npm install bootstrap
```
https://getbootstrap.com/docs/5.1/layout/containers/

### mitt
Vue2.x使用EventBus进行组件通信，而Vue3.x推荐使用mitt.js。
由于Vue3.x中删除了on和off，因此不能借助于一个单独的Vue实例来实现全局事件的发布和订阅与取消订阅（也就是跨组件通讯）
比起Vue实例上的EventBus，mitt.js优点：首先它足够小，仅有200bytes，其次支持全部事件的监听和批量移除，它还不依赖Vue实例，所以可以跨框架使用，React或者Vue，甚至jQuery项目都能使用同一套库。