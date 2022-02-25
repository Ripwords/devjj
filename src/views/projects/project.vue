<script lang="ts" setup>
import { mainStore } from "../../store/mainStore";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute()
const router = useRouter()
const store = mainStore()
const project = ref(store.projects[store.projects.findIndex((page) => {
  return page.title == route.params.id
})])

if (project.value.link.includes("github")) {
  console.log(project.value.link)
  window.open(project.value.link)
  router.push('/projects')
}
</script>

<template>
  <div class="flex justify-center m-10">
    <p>
      <iframe v-if="!project.link.includes('github')" :src="project.link" width="550" height="620" style="overflow: hidden;" />
    </p>
  </div>
</template>