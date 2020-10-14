<template>
    <div class="list-group-item product">
        <p class="flex justify-content-between">
            <span>{{ product.name }} - <small>{{ product.id }}</small></span>
            <button @click="removeProduct(index)" class="trash-icon" style="display: inline-block;">
                X
            </button>
        </p>
        <input type="number" class="number-field custom-input browser-default" v-model="product.amount" min="0" style="width: 100px;"> <small>{{ product.unit.unit }}</small>
        -
        <input type="number" class="number-field custom-input browser-default" v-model="product.price" min="0" style="width: 100px;"> € -
        <select v-model="product.origin" style="width: 100px;">
            <option v-for="origin in origins"
                    v-bind:value="origin">
                {{ origin.from }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
        index: Number,
        origins: Array,
    },
    data() {
        return {

        }
    },
    methods: {
        removeProduct(index) {
            this.$emit('remove-product', index);
        },
    }
}
</script>

<style>

</style>
