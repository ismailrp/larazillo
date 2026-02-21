<template>
    <div class="grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-3">
        <Box
            v-for="listing in listings"
            :key="listing.id"
            class="text-sm text-gray-600"
        >
            <div>
                <!-- <Link :href="`/listing/${listing.id}`"> -->
                <Link :href="route('listing.show', listing.id)">
                    <Price :price="listing.price" />
                    <ListingSpace :listing="listing" />
                    <ListingAddress :listing="listing" />
                </Link>
            </div>
            <div>
                <Link :href="route('listing.edit', listing.id)">Edit </Link>|
                <Link
                    :href="route('listing.destroy', listing.id)"
                    method="delete"
                    as="button"
                    class="text-red-600 hover:underline cursor-pointer"
                >
                    Delete</Link
                >
            </div>
        </Box>
    </div>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
import ListingAddress from "@/Components/ListingAddress.vue";
import ListingSpace from "@/Components/ListingSpace.vue";
import Price from "@/Components/Price.vue";
import Box from "@/Components/UI/Box.vue";
defineProps({
    listings: Array,
});
</script>
