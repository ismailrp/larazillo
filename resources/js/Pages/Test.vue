<script setup>
defineProps({ name: String })
</script>

<template>
  <div class="text-2xl font-bold text-blue-600">
    {{ name }}
  </div>
</template>