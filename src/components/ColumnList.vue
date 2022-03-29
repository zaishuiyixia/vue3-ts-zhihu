<template>
  <div class="row">
    <div v-for="column in columnList" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar && column.avatar.fitUrl" :alt="column.title" class="rounded-circle border border-light my-3" >
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <router-link :to="`/column/${column._id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType, computed } from 'vue'
import { ColumnProps } from '@/store'
import { addColumnAvatar } from '@/utils/helper'

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // 现在的 Array 是没有类型的，只是一个数组，如果希望它是一个 ColomnProps 的数组，直接使用了类型断言直接写成 ColomnProps[]不行的 ，因为 Array 是一个数组的构造函数不是类型，
      // 可以使用 PropType 这个方法，它接受一个泛型，将 Array 构造函数返回传入的泛型类型。
      // Vue对定义了type的Prop执行运行时验证，需要通过PropType强制转换构造函数，将类型提供给TypeScript
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        addColumnAvatar(column, 50, 50)
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>
<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
