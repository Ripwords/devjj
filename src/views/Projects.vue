<script lang="ts" setup>
import { mainStore } from "../store/mainStore";

const store = mainStore()
</script>

<template>
  <div class="flex justify-center m-6">
    <n-list>
      <template #header>Projects</template>
      <n-list-item v-for="project in store.projects" :key="project.title">
        <router-link :to="`/projects/${project.title}`">
          <n-thing :title="project.title" :description="project.description"></n-thing>
        </router-link>
      </n-list-item>
    </n-list>
    <router-view></router-view>
  </div>
</template>