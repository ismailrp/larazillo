<template>
    <div>
        <header
            class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900w-full"
        >
            <div class="container mx-auto">
                <nav class="p-4 flex items-center justify-between">
                    <div class="text-lg font-medium">
                        <Link :href="route('listing.index')">Listings</Link>
                    </div>
                    <div class="text-xl font-bold text-indigo-600">
                        <Link :href="route('listing.index')">LaraZillo</Link>
                    </div>
                    <div>
                        <Link
                            :href="route('listing.create')"
                            class="btn-primary"
                            >+ New Listing</Link
                        >
                    </div>
                </nav>
            </div>
        </header>
        <main class="container mx-auto p-4">
            <div
                v-if="flashSuccess"
                class="mb-4 border-green-500 bg-green-100 p-2 rounded-md border"
            >
                {{ flashSuccess }}
            </div>
            <slot>Default</slot>
        </main>
    </div>
</template>
<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const page = usePage();
const flashSuccess = computed(() => page.props.flash.success);
</script>
