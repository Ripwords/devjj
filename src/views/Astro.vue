<script lang="ts" setup>
import { animationInit } from "../animations/animations";

const nH1Animation = animationInit(
  {
    y: {
      init: true,
      px: -300,
      to: 0
    },
    options: {
      beforeEnter: true,
      enter: true,
      duration: 2,
      ease: "power1.out",
      done: true
    }
  }
)

</script>

<template>
  <div>
    <div class="flex justify-center mt-3">
      <transition
        appear
        @before-enter="nH1Animation.beforeEnter"
        @enter="nH1Animation.enter"
      >
        <n-h1>
          <typingHeader 
            :steps="[
              'A',
              800,
              'As',
              500,
              'Astr',
              400,
              'Astropho',
              400,
              'Astrophotography'
            ]"
          />
        </n-h1>
      </transition>
    </div>
    <div class="mx-10 mb-10">
      <n-card>
        <InstaFeed />
      </n-card>
    </div>
  </div>
</template>