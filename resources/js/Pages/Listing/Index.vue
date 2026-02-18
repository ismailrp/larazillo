<template>
    <div>
        <div
            v-for="listing in listings"
            :key="listing.id"
            class="text-sm text-gray-600"
        >
            <div>
                <!-- <Link :href="`/listing/${listing.id}`"> -->
                <Link :href="route('listing.show', listing.id)">
                    <ListingAddress :listing="listing" />, for price at ${{
                        listing.price
                    }}
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
        </div>
    </div>
</template>
<script setup>
import { Link } from "@inertiajs/vue3";
import ListingAddress from "@/Components/ListingAddress.vue";
defineProps({
    listings: Array,
});
</script>
