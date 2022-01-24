<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <colume-list :list="columnList"></colume-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { testData as columnList, currentUser } from './testData'
import ColumeList from "./components/ColumnList.vue"
import GlobalHeader from "./components/GlobalHeader.vue"

export default defineComponent({
  components: {
    GlobalHeader,
    ColumeList
  },
  setup() {
    return {
      currentUser,
      columnList
    }
  },
})
</script>

<style lang="less">
</style>
