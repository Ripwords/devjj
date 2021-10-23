<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import gsap from "gsap";
import { mainStore } from "../store/mainStore";
import { animationInit } from "../animations/animations"

// Variables
const store = mainStore()
const showTitle = ref(false)
const showList = ref(false)
const showGithubButton = ref(false)

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

const githubButtonAnimation = animationInit(
  {
    y: {
      init: true,
      px: 3000,
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
      duration: 0.7,
      ease: "power2.out",
      done: false
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

    <div class="flex justify-center m-6">
      <transition
        @before-enter="listAnimation.beforeEnter"
        @enter="listAnimation.enter"
        @after-enter="showGithubButton = true"
      >
        <n-list v-show="showList">
          <template #header>Projects</template>
          <n-list-item v-for="project in store.projects" :key="project.title">
            <a :href="project.link">
              <n-thing :title="project.title" :description="project.description"></n-thing>
            </a>
          </n-list-item>
        </n-list>
      </transition>
    </div>

    <div class="m-3 top-0 absolute right-[-0]">
      <transition
        @before-enter="githubButtonAnimation.beforeEnter"
        @enter="githubButtonAnimation.enter"
      >
        <i-fa:github-square v-show="showGithubButton" style="width: 50px; height: 50px;" @click="redirectPage('https://www.github.com/Ripwords')"></i-fa:github-square>
      </transition>
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

    <div class="flex justify-center m-6">
      <n-list>
        <template #header>Projects</template>
        <n-list-item v-for="project in store.projects" :key="project.title">
          <a :href="project.link">
            <n-thing :title="project.title" :description="project.description"></n-thing>
          </a>
        </n-list-item>
      </n-list>
    </div>

    <div class="m-3 top-0 absolute right-[-0]">
      <i-fa:github-square style="width: 50px; height: 50px;" @click="redirectPage('https://www.github.com/Ripwords')"></i-fa:github-square>
    </div>
  </div>
</template>