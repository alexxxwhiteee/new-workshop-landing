<script setup>
import { ref, onMounted } from 'vue'
import Header from './Header.vue';
import NavMenu from './NavMenu.vue';
import Footer from './Footer.vue';


const modal = ref(false)

onMounted(() => {
    const lastSeen = localStorage.getItem('lastSeenTime')
    const now = Date.now()
    const oneWeek = 7 * 24 * 60 * 60 * 1000

    if (!lastSeen || now - parseInt(lastSeen) > oneWeek) {
        modal.value = true
        localStorage.setItem('lastSeenTime', now)
    }
})

  
</script>

<template>

  <div class="hh">

    <Header></Header>
    <v-main>
    <NavMenu></NavMenu>
    <router-view v-slot="{ Component }">
    <transition name="v" mode="out-in">
    <component :is="Component" />
    </transition>
    </router-view>
    </v-main>
    <Footer></Footer>

    

    <div class="text-center pa-8">
    <v-bottom-sheet v-model="modal" inset>
      <v-card class="text-center" height="200">
        <v-card-text>
          <v-btn class="text__button text__button_hover" text="Закрыть" variant="text" @click="modal = !modal"></v-btn>

          <br />
          <br />

          <div>Все изделия которые вы видите на сайте являются примерами работ. 
            Возможно повторение или изготовление изделия с учетом ваших пожеланий. Постепенно будут появляться новые товары. 
            Для новых клиентов предоставляется скидка в размере 10% на первый заказ. </div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>

  </div>

</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.text__button
{
  border: 1px solid rgb(200, 200, 200);
  transition: 0.1s ease-in-out;
}

.text__button_hover:hover
{
  border: 1px solid black;
}

</style>