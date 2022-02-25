<script lang="ts" setup>
// @ts-nocheck
import { onMounted } from 'vue'

onMounted(() => {
  const scriptTag = document.createElement('script')
  scriptTag.src = "//instafeed.assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js"
  document.getElementsByTagName('head')[0].appendChild(scriptTag)

  window.PixleeAsyncInit = function() {
    Pixlee.init({apiKey:'R0geol5jCaXNw6X2A4e7'})
    Pixlee.addSimpleWidget({widgetId:'35979'})
  }
})
</script>

<template>
  <div id="pixlee_container"></div>
</template>