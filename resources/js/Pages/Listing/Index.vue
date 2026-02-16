<template>
<div>
    <div v-for="listing in listings" :key="listing.id" class="text-sm text-gray-600">
      <Link :href="`/listing/${listing.id}`">
        <ListingAddress :listing="listing" /> for price at ${{ listing.price }}
        </Link>
    </div>
 </div>   
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
import ListingAddress from '@/Components/ListingAddress.vue';
defineProps({
    listings: Array
})
</script>