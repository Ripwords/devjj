<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter()
</script>

<template>
  <div class="center">
    <n-button @click="router.push('/home')">Home</n-button>
    <n-button @click="router.push('/astro')">Gallery</n-button>
  </div>
</template>