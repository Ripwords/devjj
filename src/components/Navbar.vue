<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter()
const redirectPage = (link: string) => window.open(link)
</script>

<template>
  <div class="m-3">
    <div class="flex justify-center">
      <n-button @click="router.push('/home')">Home</n-button>
      <n-button @click="router.push('/projects')">Projects</n-button>
      <n-button @click="router.push('/astro')">Gallery</n-button>
      <i-fa:github-square class="w-8 h-8 right-[-0] absolute mr-3" @click="redirectPage('https://www.github.com/Ripwords')"></i-fa:github-square>
    </div>
  </div>
</template>