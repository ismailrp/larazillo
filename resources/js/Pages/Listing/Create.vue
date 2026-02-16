<template>
  <form @submit.prevent="submit">
     <div class="mb-4">
        <label for="beds" class="block text-sm font-medium text-gray-700">Beds</label>
        <input type="number" name="beds" id="beds" v-model="form.beds" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    </div>
    <div class="mb-4">
        <label for="baths" class="block text-sm font-medium text-gray-700">Baths</label>
        <input type="number" name="baths" id="baths" v-model="form.baths" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    </div>
    <div class="mb-4">
        <label for="area" class="block text-sm font-medium text-gray-700">Area</label>
        <input type="number" name="area" id="area" v-model="form.area" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    </div>
     <div class="mb-4">
        <label for="city" class="block text-sm font-medium text-gray-700">    City</label>
        <input type="text" name="city" id="city" v-model="form.city" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    </div>
    <div class="mb-4">
        <label for="street" class="block text-sm font-medium text-gray-700">Street</label>
        <input type="text" name="street" id="street" v-model="form.street" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    </div>
     <div class="mb-4">
        <label for="code" class="block text-sm font-medium text-gray-700">Code</label>
        <input type="text" name="code" id="code" v-model="form.code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    </div>
    <div class="mb-4">
        <label for="street_nr" class="block text-sm font-medium text-gray-700">Street Nr</label>
        <input type="text" name="street_nr" id="street_nr" v-model="form.street_nr" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    </div>
    <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
        <input type="number" name="price" id="price" v-model="form.price" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    </div>
    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Create
    </button>
  </form>
</template>


<script setup>
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    street: '',
    street_nr: '',
    code: '',
    city: '',
    beds: 0,
    baths: 0,
    area: 0,
    price: 0
});
const submit = () => {
    form.post('/listing');
}
</script>
