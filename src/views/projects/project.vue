<script lang="ts" setup>
import { mainStore } from "../../store/mainStore";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute()
const store = mainStore()
const project = ref(store.projects[store.projects.findIndex((page) => {
  return page.title == route.params.id
})])
</script>

<template>
  <div class="flex justify-center m-10">
    <p>
      <iframe v-if="!project.link.includes('github')" :src="project.link" width="550" height="620" style="overflow: hidden;" />
    </p>
  </div>
</template>