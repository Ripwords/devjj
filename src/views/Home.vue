<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';
import gsap from "gsap";
import { mainStore } from "../store/mainStore";

const store = mainStore()
const show = ref(false)
const showGithub = ref(false)
const showLogo = ref(true)
const showTitle = ref(false)
const projects = ref(store.projects)

const redirectPage = (link: string) => window.open(link) 
const beforeEnterLogo = (el: any) => {
  el.style.transform = 'translateY(-100px)'
  el.style.opacity = 0
}
const beforeEnterList = (el: any) => {
  el.style.transform = 'translateY(300px)'
  el.style.opacity = 0
}
const beforeEnterGithub = (el: any) => {
  el.style.transform = 'translateY(3000px)'
  el.style.opacity = 0
}
const afterEnterList = (el: any) => {
  showGithub.value = true
}
const afterEnterLogo = (el: any) => {
  showTitle.value = true
}
const enterGithub = (el: any) => {
  gsap.to(el, {
    duration: 0.7,
    y: 0,
    opacity: 1,
    ease: 'power2.out'
  })
}
const enterLogo = (el: any, done: any) => {
  gsap.to(el, {
    duration: 1.5,
    y: 0,
    opacity: 1,
    ease: 'bounce.out',
    onComplete: done
  })
}
const enterList = (el: any, done: any) => {
  gsap.to(el, {
    duration: 1.5,
    y: 0,
    opacity: 1,
    ease: "power1.out",
    onComplete: done
  })
}

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
              show = true
            }
          ]"
        />
      </transition>
      <kinesis-container class="ml-5">
        <kinesis-element :strength="30">
          <transition
            appear
            @before-enter="beforeEnterLogo"
            @enter="enterLogo"
            @after-enter="afterEnterLogo"
          >
            <img v-if="showLogo" class="w-auto h-[50px]" src="/Sig.png" alt="logo" @click="redirectPage('https://www.devjj.de')">
          </transition>
        </kinesis-element>
      </kinesis-container>
    </div>

    <div class="flex justify-center m-6">
      <transition
        @before-enter="beforeEnterList"
        @enter="enterList"
        @after-enter="afterEnterList"
      >
        <n-list v-show="show">
          <template #header>Projects</template>
          <n-list-item v-for="project in projects" :key="project.title">
            <a :href="project.link">
              <n-thing :title="project.title" :description="project.description"></n-thing>
            </a>
          </n-list-item>
        </n-list>
      </transition>
    </div>

    <div class="m-3 bottom-0 absolute right-[-0]">
      <transition
        @before-enter="beforeEnterGithub"
        @enter="enterGithub"
      >
        <i-fa:github-square v-show="showGithub" style="width: 50px; height: 50px;" @click="redirectPage('https://www.github.com/Ripwords')"></i-fa:github-square>
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
        <n-list-item v-for="project in projects" :key="project.title">
          <a :href="project.link">
            <n-thing :title="project.title" :description="project.description"></n-thing>
          </a>
        </n-list-item>
      </n-list>
    </div>

    <div class="m-3 bottom-0 absolute right-[-0]">
      <i-fa:github-square style="width: 50px; height: 50px;" @click="redirectPage('https://www.github.com/Ripwords')"></i-fa:github-square>
    </div>
  </div>
</template>