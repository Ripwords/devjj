<script lang="ts" setup>
const steps = [
  'A',
  500,
  'As',
  200,
  'Astr',
  300,
  'Astropho',
  100,
  'Astrophotography'
]
</script>

<template>
  <div>
    <div class="flex justify-center mt-3">
      <n-h1>
        <typingHeader 
          :steps="steps"
        />
      </n-h1>
    </div>
    <div class="mx-10 mb-10">
      <n-card>
        <InstaFeed />
      </n-card>
    </div>
  </div>
</template>