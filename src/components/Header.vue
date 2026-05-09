<script setup>

const leftNav = [
  { label: 'Товары', to: '/goods' },
  { label: 'Доставка и оплата', to: '/delivery-payment' }
]

const rightNav = [
  { label: 'О нас', to: '/about' },
  { label: 'Контакты', to: '/contacts' }
]
  
</script>

<template>

  <!-- <div>
    <div class="header">
    <div class="nav-group nav-group--left">
      <v-btn
        v-for="item in leftNav"
        :key="item.to"
        :to="item.to"
        variant="text"
      >
        {{ item.label }}
      </v-btn>
    </div>

    <v-btn
      to="/"
      variant="text"
      class="logo-button"
    >
      <img src="/src/assets/icons/main_logo.svg" alt="Главная" class="logo" />
    </v-btn>

    <div class="nav-group nav-group--right">
      <v-btn
        v-for="item in rightNav"
        :key="item.to"
        :to="item.to"
        variant="text"
      >
        {{ item.label }}
      </v-btn>
    </div>
</div>


  </div> -->


<div>
<v-app-bar>
      <v-bottom-navigation :elevation="0" grow scroll-behavior="hide">
      <v-btn value="recent">
        <v-icon>mdi-history</v-icon>

        <span>Recent</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
</v-app-bar>
</div>
</template>

<style scoped>
.header
{
  display: flex;

}
.nav-group {
  display: flex;
  gap: 16px;
}

.nav-group--left {
  margin-left: auto;
}

.nav-group--right {
  margin-right: auto;
}

.logo-button {
  padding: 0;
  min-width: auto;
  background-color: white;
}

.logo {
  height: 150px;
  margin: 0px 10px 0px 10px;
  width: auto;
}

</style>