<template>
  <div class="container mx-4 px-4">
    <HomeView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeView from './views/HomeView.vue'
export default defineComponent({
  components: {
    HomeView,
  },
})
</script>
