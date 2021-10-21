<script lang="ts" setup>
import VTypical from "vue-typical";

const props = defineProps<{
  steps: Array<string | number | Function>
}>()
</script>

<template>  
  <n-h1>
    <v-typical
      :steps="props.steps"
      :wrapper="'div'"
      :loop="1"
    ></v-typical>
  </n-h1>
</template>