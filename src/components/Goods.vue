<script setup>
  
</script>

<template>

  <div class="hh">

   Goods
    <div class="nav__links">
    <router-link to="/goods/bags">Bags</router-link>
    <router-link to="/goods/card">Card</router-link>
    </div>

    <router-view v-slot="{ Component }">
    <transition name="v" mode="out-in">
    <component :is="Component" />
    </transition>
    </router-view>

  </div>

</template>

<style>
/* .hh
{
  height: 800px;
} */

</style>