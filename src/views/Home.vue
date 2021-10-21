<script lang="ts" setup>
import { ref } from 'vue';

const subtitle = ref(".")
const showIcons = ref(false)

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
          showIcons = true
        }
      ]"
    />
    <kinesis-container class="ml-5">
      <kinesis-element :strength="30">
        <img class="w-auto h-[50px]" src="Sig.png" alt="logo" @click="redirectPage('https://www.devjj.de')">
      </kinesis-element>
    </kinesis-container>
  </div>
  
  <div class="flex justify-center m-2">
    <transition name="fade">
      <i-fa:github-square v-show="showIcons" style="width: 50px; height: 50px;" @click="redirectPage('https://www.github.com/Ripwords')"></i-fa:github-square>
    </transition>
  </div>

  <div class="flex justify-center m-10">
    <transition name="fade-late">
      <n-list v-show="showIcons">
        <template #header>
          Projects
        </template>
        <n-list-item>
          <a href="https://www.fluidscalc.netlify.app">
            <n-thing title="fluidsCalc" description="Fluids Mechanics Calculator"></n-thing>
          </a>
        </n-list-item>
        <n-list-item>
          <a href="https://www.astroz.netlify.app">
            <n-thing title="Astroz 🌌" description="Astrophotography related calculators"></n-thing>
          </a>
        </n-list-item>
        <n-list-item>
          <a href="https://www.github.com/Ripwords/unicorn">
            <n-thing title="Unicorn 🦄" description="A unit converter"></n-thing>
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