<template>
    <div class="list-group-item product">
        <p>
            {{ product.name }} - <small>{{ product.comment }}</small>
            <button @click="removeProduct(index)" class="trash-icon" style="display: inline-block;">
                X
            </button>
        </p>
        <input type="number" v-model="product.amount" min="0" style="width: 100px;"> {{ product.unit.unit }}
        -
        <input type="number" v-model="product.price" min="0" style="width: 100px;"> € -
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
