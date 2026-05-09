<script setup>
  
</script>

<template>

  <div class="nav">

      Nav Menu
      <div class="nav__links">
      <router-link to="/">Goods</router-link>
      <router-link to="/wallets">Wallets</router-link>
      </div>

  </div>

</template>

<style>
.nav
{
  display: flex;
  flex-direction: column;
}

.nav__links *
{
  margin-left: 20px;
}

</style>