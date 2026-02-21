<template>
    <form @submit.prevent="submit">
        <div class="grid grid-cols-6 gap-4">
            <div class="col-span-2">
                <label for="beds" class="label">Beds</label>
                <input type="text" v-model.number="form.beds" class="input" />
                <div v-if="form.errors.beds" class="input-error">
                    {{ form.errors.beds }}
                </div>
            </div>

            <div class="col-span-2">
                <label for="baths" class="label">Baths</label>
                <input type="text" v-model.number="form.baths" class="input" />
                <div v-if="form.errors.baths" class="input-error">
                    {{ form.errors.baths }}
                </div>
            </div>

            <div class="col-span-2">
                <label for="area" class="label">Area</label>
                <input type="text" v-model.number="form.area" class="input" />
                <div v-if="form.errors.area" class="input-error">
                    {{ form.errors.area }}
                </div>
            </div>

            <div class="col-span-4">
                <label for="city" class="label"> City</label>
                <input type="text" v-model="form.city" class="input" />
                <div v-if="form.errors.city" class="input-error">
                    {{ form.errors.city }}
                </div>
            </div>

            <div class="col-span-2">
                <label for="code" class="label">Code</label>
                <input type="text" v-model.number="form.code" class="input" />
                <div v-if="form.errors.code" class="input-error">
                    {{ form.errors.code }}
                </div>
            </div>

            <div class="col-span-4">
                <label for="street" class="label">Street</label>
                <input type="text" v-model="form.street" class="input" />
                <div v-if="form.errors.street" class="input-error">
                    {{ form.errors.streets }}
                </div>
            </div>

            <div class="col-span-2">
                <label for="street_nr" class="label">Street Nr</label>
                <input
                    type="text"
                    v-model.number="form.street_nr"
                    class="input"
                />
                <div v-if="form.errors.street_nr" class="input-error">
                    {{ form.errors.street_nr }}
                </div>
            </div>

            <div class="col-span-6">
                <label for="price" class="label">Price</label>
                <input type="text" v-model.number="form.price" class="input" />
                <div v-if="form.errors.price" class="input-error">
                    {{ form.errors.price }}
                </div>
            </div>

            <div class="col-span-6">
                <button type="submit" class="btn-primary">Create</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    street: "",
    street_nr: "",
    code: "",
    city: "",
    beds: 0,
    baths: 0,
    area: 0,
    price: 0,
});
const submit = () => {
    form.post("/listing");
};
</script>
