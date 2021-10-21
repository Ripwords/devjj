<script lang="ts" setup>
import { ref } from 'vue';
import { mainStore } from "../store/mainStore";

const store = mainStore()
const subtitle = ref(".")
const show = ref(false)
const projects = ref(store.projects)

const redirectPage = (link: string) => window.location.href = link
</script>

<template>
  <div class="flex justify-center m-5">
    <typingHeader 
      :steps="[
        1000,
        'dev',
        500,
        () => subtitle += '.',
        'devjj.com',
        500,
        () => subtitle += '.',
        'devjj.',
        350,
        'devjj.de',
        350,
        () => {
          subtitle = 'My Personal Website'
          show = true
        }
      ]"
    />
    <kinesis-container class="ml-5">
      <kinesis-element :strength="30">
        <img class="w-auto h-[50px]" src="../../public/Sig.png" alt="logo" @click="redirectPage('https://www.devjj.de')">
      </kinesis-element>
    </kinesis-container>
  </div>
  
  <div class="flex justify-center m-2">
    <transition name="fade">
      <i-fa:github-square v-show="show" style="width: 50px; height: 50px;" @click="redirectPage('https://www.github.com/Ripwords')"></i-fa:github-square>
    </transition>
  </div>

  <div class="flex justify-center m-10">
    <transition name="fade-late">
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
</template>

<style scoped>
.fade-enter-active {
  animation: bounce-in .5s;
}

.fade-late-enter-active {
  animation: bounce-in .6s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>