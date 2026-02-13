<template>
  <div>
	<div>Index</div>
	<Link href="/show">Show</Link>
  {{ message }}
  </div>
</template>

<script setup>
import {Link} from "@inertiajs/vue3"; 
defineProps({
  message: String
});
</script>


