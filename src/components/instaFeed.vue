<script lang="ts" setup>
// @ts-expect-error
import Instafeed from "instafeed.js";
import { onMounted } from "vue";

const feed = new Instafeed({
  accessToken: "IGQVJVZAHM4bmZAueC1aRGZAoS0lOLUtaSUprRzF4eFhhRXNId2VWbmhuMm5vQ2pQTFcycURTYkNlY3JVbndhdzlkOHNfaVQyZAHZAzajZAJX1gtUkdtUzRKdnM5ZAjM3T3JQd2VRRXU4UmVWMmMtZA2JzMlluQwZDZD",
  template: '<a class="flex justify-center" href="{{link}}" target="_blank"><img class=" object-cover" title="{{caption}}" src="{{image}}" /></a>',
})

onMounted(() => {
  feed.run()
})
</script>

<template>
  <div 
    class="
      grid 
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5 
      2xl:grid-cols-6
      gap-4 
      m-5  
    " 
    id="instafeed"
  />
</template>