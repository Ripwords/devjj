<script lang="ts" setup>
import { darkTheme } from "naive-ui";
</script>

<template>
  <n-config-provider :theme='darkTheme'>
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');

#app {
  font-family: 'Noto Sans Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
