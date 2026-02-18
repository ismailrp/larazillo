<template>
    <form @submit.prevent="update">
        <div class="mb-4">
            <label for="beds" class="block text-sm font-medium text-gray-700"
                >Beds</label
            >
            <input
                type="number"
                name="beds"
                id="beds"
                v-model="form.beds"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div
            v-if="form.errors.beds"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400 dark:border-red-800"
        >
            {{ form.errors.beds }}
        </div>
        <div class="mb-4">
            <label for="baths" class="block text-sm font-medium text-gray-700"
                >Baths</label
            >
            <input
                type="number"
                name="baths"
                id="baths"
                v-model="form.baths"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div
            v-if="form.errors.baths"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400 dark:border-red-800"
        >
            {{ form.errors.baths }}
        </div>
        <div class="mb-4">
            <label for="area" class="block text-sm font-medium text-gray-700"
                >Area</label
            >
            <input
                type="number"
                name="area"
                id="area"
                v-model="form.area"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div
            v-if="form.errors.area"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400 dark:border-red-800"
        >
            {{ form.errors.area }}
        </div>
        <div class="mb-4">
            <label for="city" class="block text-sm font-medium text-gray-700">
                City</label
            >
            <input
                type="text"
                name="city"
                id="city"
                v-model="form.city"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div
            v-if="form.errors.city"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400 dark:border-red-800"
        >
            {{ form.errors.city }}
        </div>
        <div class="mb-4">
            <label for="street" class="block text-sm font-medium text-gray-700"
                >Street</label
            >
            <input
                type="text"
                name="street"
                id="street"
                v-model="form.street"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div
            v-if="form.errors.streets"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400 dark:border-red-800"
        >
            {{ form.errors.streets }}
        </div>
        <div class="mb-4">
            <label for="code" class="block text-sm font-medium text-gray-700"
                >Code</label
            >
            <input
                type="text"
                name="code"
                id="code"
                v-model="form.code"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div
            v-if="form.errors.code"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400 dark:border-red-800"
        >
            {{ form.errors.code }}
        </div>
        <div class="mb-4">
            <label
                for="street_nr"
                class="block text-sm font-medium text-gray-700"
                >Street Nr</label
            >
            <input
                type="text"
                name="street_nr"
                id="street_nr"
                v-model="form.street_nr"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div
            v-if="form.errors.street_nr"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400 dark:border-red-800"
        >
            {{ form.errors.street_nr }}
        </div>
        <div class="mb-4">
            <label for="price" class="block text-sm font-medium text-gray-700"
                >Price</label
            >
            <input
                type="number"
                name="price"
                id="price"
                v-model="form.price"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div
            v-if="form.errors.price"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400 dark:border-red-800"
        >
            {{ form.errors.price }}
        </div>
        <button
            type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Save
        </button>
    </form>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
const props = defineProps({
    listing: Object,
});

const form = useForm({
    street: props.listing.street,
    street_nr: props.listing.street_nr,
    code: props.listing.code,
    city: props.listing.city,
    beds: props.listing.beds,
    baths: props.listing.baths,
    area: props.listing.area,
    price: props.listing.price,
});
const update = () => {
    form.put(route("listing.update", props.listing.id));
};
</script>
