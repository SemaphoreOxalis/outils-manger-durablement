<template>
    <div class="list-group-item product">
        <div class="flex justify-content-between">
            <div>
                <span>{{ product.name }}</span>
                <a v-if="product.comment" href="#" class="product-comment">?
                    <span>{{ product.comment }}</span>
                </a>
            </div>

            <button @click="removeProduct(index)" class="trash-icon" style="display: inline-block;">
                X
            </button>
        </div>
        <input type="number" class="number-field custom-input browser-default" v-model="product.amount" min="0" style="width: 100px;">
        <small>{{ product.unit.shortUnit }}</small>
        <a href="#" class="product-comment">?
            <span>{{ product.unit.unit }}</span>
        </a>
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
a {
    color: #ccc;
}
a:hover, a:focus {
    background: rgba(0,0,0,.4);
    box-shadow: 0 1px 0 rgba(255,255,255,.4);
}

a span {
    position: absolute;
    margin-top: 23px;
    margin-left: -35px;
    background-color: var(--main-color);
    color: var(--second-color-lighter);
    padding: 15px;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0,0,0,.5);
    transform: scale(0) rotate(-12deg);
    transition: all .25s;
    opacity: 0;
}
a:hover span, a:focus span {
    transform: scale(1) rotate(0);
    opacity: 1;
}

</style>
