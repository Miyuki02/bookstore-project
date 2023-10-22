<template>
  <!-- <Sidebar /> -->
  <!-- <ShopIndex /> -->
  <div>
    <RouterView />
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useRoute } from 'vue-router'

// import ShopIndex from './views/ShopIndex.vue'

const route = useRoute()

console.log('Route name:', route.name)
// console.log("Show Sidebar:", showSidebar.value);
</script>

<style>

</style>
