<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
defineProps({
  message: String,
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <h1 class="text-3xl font-bold text-blue-600">
      {{ message }}
    </h1>
    <br />
    <AppLayout>
    <h1 class="text-xl">Home</h1>
    <div class="text-red-500 text-3xl font-bold">
  TEST TAILWIND MERAH AJAH
</div>
  </AppLayout>
  </div>
</template>
