<script setup lang="ts">
import {RouterView } from 'vue-router'
import NavBarComponent from './components/navigation/NavBarComponent.vue'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- Add this to the head of your HTML file -->


    <div>
      <NavBarComponent />
      
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
