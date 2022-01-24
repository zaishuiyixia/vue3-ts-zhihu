<template>
  <img :src="result && result.message">
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  async setup() {
    const result = ref(null)
    const rawData = await axios.get('https://dog.ceo/api/breeds/image/random')
    if(rawData.data) {
      result.value = rawData.data
    }
    return {
      result
    }
  }
})
</script>
