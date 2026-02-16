<template>
<div>
    <div class="text-sm text-gray-600">
        <ListingAddress :listing="listing" /> 
    </div>
    </div>
</template>
<script setup>
import ListingAddress from '@/Components/ListingAddress.vue';
defineProps({
    listing: Object
})
</script>