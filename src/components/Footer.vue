<script setup>

const socials = [
  {
    name: 'VK',
    url: 'https://vk.com/gungnirleather',
    src: 'vk.svg'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/gungnirleather',
    src: 'telegram.svg'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@gungnirleather7166',
    src: 'youtube.svg'
  },
  {
    name: 'Livemaster',
    url: 'https://www.livemaster.ru/gungnirleather',
    src: 'livemaster.svg'
  }
]

const iconModules = import.meta.glob('/src/assets/icons/*.svg', { eager: true })

const getIconUrl = (filename) => {
  const path = `/src/assets/icons/${filename}`
  const module = iconModules[path]
  return module.default
}

  
</script>

<template>

  <div>

      <v-footer class="text-center d-flex flex-column ga-2 py-4">

     <div class="d-flex ga-3">
      <v-btn class="btn"
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        :title="social.name"
        target="_blank"
        rel="noopener"
        density="comfortable"
        variant="text"
        icon
      > 
      <v-img
        :src="getIconUrl(social.src)"
        height="25"
        width="25"
        >
        </v-img>
     </v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="300"></v-divider>

    <div class="text-body-2 font-weight-medium opacity-90">
      Мастерская аксессуаров из натуральной кожи. Полностью ручная работа. 
      Индивидуальный подход к каждому клиенту. Возможность разработки изделий с нуля. 
      Только качественная фурнитура, использование оригинальных бусин и подвесов.
    </div>

    <v-divider class="my-2" thickness="2" width="300"></v-divider>

    <div>2021 - {{ new Date().getFullYear() }} — <strong>Gungnir Leather</strong></div>
  </v-footer>

  </div>

</template>

<style scoped>

</style>