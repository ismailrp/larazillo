<template>
    <div>
        <Link href="/listing/">Listings</Link> &nbsp;
        <Link href="/listing/create">New Listing</Link>

        <div
            v-if="flashSuccess"
            class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
        >
            {{ flashSuccess }}
        </div>
        <slot>Default</slot>
    </div>
</template>
<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const page = usePage();
const flashSuccess = computed(() => page.props.flash.success);

// import {ref} from "vue";
// const timer = ref(0);
// setInterval(() => timer.value++, 1000);
</script>
