<template>
    <div v-if="product.type === 'prod'">
        <div :class="getClasses()">
            <div class="product-header-container" :id="'header-' + basketId + '-' + product.id">

                <div class="d-flex">
                    <div class="text-block">
                        <span class="product-name">{{ product.name }} <small>{{ product.origin.from }}</small><small> - {{ product.amount }}&nbsp;{{ unit }}</small></span>
                    </div>
                    <a v-if="product.comment" class="info-bubble product-info-bubble btn-ico alt tool info ml-2" :title="product.comment"></a>
                </div>

                <div class="d-flex">
                    <a class="btn-ico alt tool info-bubble"
                       data-toggle="collapse"
                       :data-target="'#body-' + basketId + '-' + product.id"
                       aria-expanded="false"
                       :aria-controls="'body-' + basketId + '-' + product.id"
                       @click="toggleFullProduct">
                        <i :id="'collapse-icon-' + basketId + '-' + product.id" class="icon icon-angle-down"></i>
                    </a>
                    <a class="btn-ico alt tool info-bubble"
                       @click="removeProduct(index)" title="Supprimer ce produit de la liste"></a>
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
                    {{ unit }}
                    <a class="info-bubble product-info-bubble btn-ico alt tool info" :title="product.unit.unit"></a>
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
    </div>

    <div v-else-if="product.type === 'special'">

        <div :class="getSpecialClasses(product)" :id="'header-' + basketId + '-' + product.id">

            <div v-if="product.id.includes('start')" class="text-block">
                <div class="move-list-controls">
                    <a @click="moveBlockUp(index)" title="Déplacer vers le haut" v-if="!isFirstBlockTitle" class="ignore-draggable edit-block"><i class="icon ml-2"></i></a><br>
                    <a @click="moveBlockDown(index)" title="Déplacer vers le bas" v-if="!isLastBlockTitle" class="ignore-draggable edit-block"><i class="icon ml-2"></i></a>
                </div>
                <div class="product-name d-flex">
                    <input v-if="edit" :id="titleId" v-model="product.name" class="ignore-draggable custom-input browser-default input" type="text" @keydown="processKey" @focusout="renamed">
                    <div v-else class="ignore-draggable">
                        <strong @click="editTitle" class="block-title">{{ product.name }}</strong>
                        <a @click="editTitle" class="ignore-draggable edit-block" title="Modifier le titre de ce bloc"><i class="icon ml-2"></i></a>
                    </div>
                </div>

            </div>

            <div v-if="product.id.includes('start')" class="d-flex">
                <!--
                <a class="btn-ico alt tool info-bubble pb-1"
                   @click="emptyBlock(product)" title="Vider ce bloc (supprimer ses produits)"><strong>✖</strong></a>
                -->
                <a class="btn-ico alt tool info-bubble"
                   @click="removeProduct(index)" title="Supprimer ce bloc"></a>
            </div>

            <div v-else><i class="icon mr-2 p-1"></i></div>
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
        isInBlock: Number,
        isFirstBlockTitle: Boolean,
        isLastBlockTitle: Boolean
    },
    data() {
        return {
            fullProductShown: false,
            edit: false,
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
        titleId: function () {
            return this.basketId + '-' + this.product.id + '-input'
        },
        unit: function () {
            if (this.product.unit.shortUnit != 'kg' && this.product.amount >= 2) {
                return this.product.unit.shortUnit + 's';
            }
            return this.product.unit.shortUnit;
        }
    },
    methods: {
        removeProduct(index) {
            this.$emit('remove-product', index);
        },
        save() {
            this.$emit('save-changes');
        },
        emptyBlock(id) {
            this.$emit('empty-block', id);
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
        },
        getClasses() {
            return [
                'product-item',
                this.isInBlock > 0 ? 'border-left-3' : ''
            ];
        },

        // BLOCK STUFF
        getSpecialClasses(product) {
            return [
                'special-product-header-container',
                'border-left',
                'border-3',
                product.id.includes('start') ? 'border-top rounded-top special-product-top' : 'border-bottom rounded-bottom special-product-bottom'
            ];
        },
        editTitle() {
            this.edit = true;
            setTimeout(() => {
                document.getElementById(this.titleId).focus();
            }, 100);
        },
        processKey(e) {
            if(e.key === 'Enter') {
                this.edit = false;
            }
        },
        renamed() {
            this.edit = false;
            this.save();
        },
        moveBlockUp(index) {
            this.$emit('move-block-up', index);
        },
        moveBlockDown(index) {
            this.$emit('move-block-down', index);
        }
    }
}
</script>
