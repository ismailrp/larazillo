<template>
    <span class="text-sm text-gray-600">
        {{ listing.street }} {{ listing.street_nr }}, {{ listing.code }}
        {{ listing.city }}
    </span>
</template>
<script setup>
defineProps({
    listing: Object,
});
</script>
