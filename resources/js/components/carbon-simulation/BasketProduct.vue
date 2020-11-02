<template>
    <div class="product-item">


        <div class="product-header-container" :id="'header-' + basketId + '-' + product.id">

            <div class="d-flex">
                <div class="text-block">
                    <span class="product-name">{{ product.name }} <small>{{ product.origin.from }}</small></span>
                </div>
                <a v-if="product.comment" class="info-bubble product-info-bubble btn-ico alt tool info ml-2">
                    <span>{{ product.comment }}</span>
                </a>
            </div>

            <div class="d-flex">
                <a class="btn-ico alt tool"
                  data-toggle="collapse"
                  :data-target="'#body-' + basketId + '-' + product.id"
                  aria-expanded="false"
                  :aria-controls="'body-' + basketId + '-' + product.id"
                  @click="toggleFullProduct">
                <i :id="'collapse-icon-' + basketId + '-' + product.id" class="icon icon-angle-down"></i>
            </a>
                <a class="btn-ico alt tool"
                   @click="removeProduct(index)"></a>
            </div>
        </div>

        <div :class="'collapse product-details-info collapse-' + basketId + '-' + product.id"
             :id="'body-' + basketId + '-' + product.id">
            <input type="number"
                   class="ignore-draggable custom-input browser-default number-field input"
                   v-model="product.amount"
                   maxlength="256"
                   min="0" step="1"
                   required
                   @change="save">
            <div class="units">
                {{ product.unit.shortUnit }}
                <a class="info-bubble product-info-bubble btn-ico alt tool info">
                    <span>{{ product.unit.unit }}</span>
                </a>
            </div>

            <input type="number"
                   class="ignore-draggable custom-input browser-default number-field input"
                   v-model="product.price"
                   maxlength="256"
                   min="0" step="1"
                   required
                   @change="save">
            <div class="units">€</div>

            <label :for="'origin-' + basketId + '-' + product.id" class="center">Origine</label>
            <select v-model="product.origin"
                    :id="'origin-' + basketId + '-' + product.id"
                    @change="save"
                    class="custom-select input custom-input"
                    :name="'origin-' + basketId + '-' + product.id"
                    :data-name="'Origine ' + basketId + '-' + product.id">
                <option v-for="origin in origins" :value="origin">
                    {{ origin.from }}
                </option>
            </select>

        </div>


    </div>
</template>

<script>
export default {
    props: {
        product: Object,
        basketId: String,
        index: Number,
        origins: Array,
    },
    data() {
        return {
            fullProductShown: false,
        }
    },
    computed: {
        collapseClass: function () {
            return '.collapse-' + this.basketId + '-' + this.product.id;
        },
        headerId: function () {
            return '#header-' + this.basketId + '-' + this.product.id;
        },
        collapseIconId: function () {
            return '#collapse-icon-' + this.basketId + '-' + this.product.id;
        },
    },
    methods: {
        removeProduct(index) {
            this.$emit('remove-product', index);
        },
        save() {
            this.$emit('save-changes');
        },
        toggleFullProduct() {
            this.fullProductShown = !this.fullProductShown;
            let collapseClass = this.collapseClass;
            let headerId = this.headerId;
            let collapseIconId = this.collapseIconId;

            $(collapseClass).on('show.bs.collapse', function () {
                $(collapseIconId).addClass("reversed");
            }).on('hide.bs.collapse', function () {
                $(collapseIconId).removeClass("reversed");
            });
        }
    }
}
</script>
