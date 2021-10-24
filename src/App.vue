<script lang="ts" setup>
import { darkTheme } from "naive-ui";
import { animationInit } from "./animations/animations";

const ease = "sine."
const duration = 0.5
const pageInAnimation = animationInit({
  opacity: {
    init: true,
    opacity: 0,
    toOpacity: 1 
  },
  options: {
    beforeEnter: true,
    enter: true,
    duration: duration,
    done: false,
    ease: ease + 'in'
  }
})

const pageOutAnimation = animationInit({
  opacity: {
    init: true,
    opacity: 1,
    toOpacity: 0 
  },
  options: {
    beforeEnter: true,
    enter: true,
    duration: duration,
    done: false,
    ease: ease + 'out'
  }
})
</script>

<template>
  <n-config-provider :theme='darkTheme'>
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition
        @before-enter="pageInAnimation.beforeEnter"
        @enter="pageInAnimation.enter"
        @before-leave="pageOutAnimation.beforeEnter"
        @leave="pageOutAnimation.enter"
      >
        <component :is="Component" />
      </transition>
    </router-view>
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

::-webkit-scrollbar {
  width: 0px;
}
</style>
