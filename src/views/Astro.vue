<template>
  <div>
    <div class="flex justify-center mt-3">
      <n-h1>
        <typingHeader 
          :steps="[
            'Astr',
            500,
            'Astropho',
            300,
            'Astrophotography',
            200,
          ]"
        />
      </n-h1>
    </div>
    <div class="mx-10">
      <n-card>
        <InstaFeed />
      </n-card>
    </div>
  </div>
</template>