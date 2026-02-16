<template>
    <div class="text-sm text-gray-600">
        {{ listing.street }} {{ listing.street_nr }}, {{ listing.code }} {{ listing.city }}
    </div>
</template>
<script setup>
defineProps({
    listing: Object
})
</script>