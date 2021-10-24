<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import gsap from "gsap";
import { mainStore } from "../store/mainStore";
import { animationInit } from "../animations/animations"

// Variables
const store = mainStore()
const showTitle = ref(false)
const showList = ref(false)

// Functions
const redirectPage = (link: string) => window.open(link)

// Animations
const logoAnimation = animationInit(
  {
    y: {
      init: true,
      px: -100,
      to: 0
    },
    opacity: {
      init: true,
      opacity: 0,
      toOpacity: 1
    },
    options: {
      beforeEnter: true,
      enter: true,
      duration: 1.5,
      ease: "bounce.out",
      done: true
    }
  }
)

const listAnimation = animationInit(
  {
    y: {
      init: true,
      px: -100,
      to: 0
    },
    opacity: {
      init: true,
      opacity: 0,
      toOpacity: 1
    },
    options: {
      beforeEnter: true,
      enter: true,
      duration: 1.5,
      ease: "power1.out",
      done: true
    }
  }
)

onUnmounted(() => {
  store.animation = false
})
</script>

<template>
  <div v-if="store.animation">
    <div class="flex justify-center m-5">
      <transition>
        <typingHeader 
          v-if="showTitle"
          :steps="[
            500,
            'dev',
            500,
            'devjj.com',
            500,
            'devjj.',
            350,
            'devjj.de',
            350,
            () => {
              showList = true
            }
          ]"
        />
      </transition>
      <kinesis-container class="ml-5">
        <kinesis-element :strength="30">
          <transition
            appear
            @before-enter="logoAnimation.beforeEnter"
            @enter="logoAnimation.enter"
            @after-enter="showTitle = true"
          >
            <img class="w-auto h-[50px]" src="/Sig.png" alt="logo" @click="redirectPage('https://www.devjj.de')">
          </transition>
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
  
  <div v-else>
    <div class="flex justify-center m-5">
      <n-h1>devjj.de</n-h1>
      <kinesis-container class="ml-5">
        <kinesis-element :strength="30">  
          <img class="w-auto h-[50px]" src="/Sig.png" alt="logo" @click="redirectPage('https://www.devjj.de')"> 
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
</template>