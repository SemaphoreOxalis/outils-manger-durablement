<template>
    <div class="list-group-item product">

        <div class="position-relative">
            <div class="d-flex justify-content-between" :id="'header-' + basketId + '-' + product.id">

                <div class="flex justify-content-between">
                    <div>
                        <span>{{ product.name }}</span> <small>{{ product.origin.from }}</small>
                        <a v-if="product.comment" href="#" class="info-bubble">?
                            <span>{{ product.comment }}</span>
                        </a>
                    </div>
                </div>

                <div>
                    <button class="button alter"
                            data-toggle="collapse"
                            :data-target="'#body-' + basketId + '-' + product.id"
                            aria-expanded="false"
                            :aria-controls="'body-' + basketId + '-' + product.id"
                            @click="toggleFullProduct"
                    >
                        <i :id="'collapse-icon-' + basketId + '-' + product.id" class="icon icon-angle-down"></i>
                    </button>
                    <button class="button alter trash-icon" @click="removeProduct(index)"
                            style="display: inline-block;">
                        X
                    </button>
                </div>
            </div>

            <div :class="'collapse collapse-' + basketId + '-' + product.id" :id="'body-' + basketId + '-' + product.id">
                <input type="number"
                       class="ignore-draggable custom-input browser-default number-field"
                       v-model="product.amount"
                       min="0" step="1"
                       required
                       @change="save"
                       style="width: 100px;">
                <small>{{ product.unit.shortUnit }}</small>
                <a href="#" class="info-bubble">?
                    <span>{{ product.unit.unit }}</span>
                </a>
                -
                <input type="number"
                       class="ignore-draggable custom-input browser-default number-field"
                       v-model="product.price"
                       min="0" step="1"
                       required
                       @change="save"
                       style="width: 100px;"> € -

<!--                <div v-for="origin in origins">-->
<!--                    <input type="radio"-->
<!--                           class="radio-boxes"-->
<!--                           :id="'origin-' + basketId + index + origin.id"-->
<!--                           v-model="product.origin"-->
<!--                           :value="origin"-->
<!--                           @change="save">-->
<!--                    <label :for="'origin-' + basketId + index + origin.id">{{ origin.from }}</label>-->
<!--                </div>-->

                <select v-model="product.origin"
                        @change="save"
                        style="width: 100px;">
                    <option v-for="origin in origins" :value="origin">
                        {{ origin.from }}
                    </option>
                </select>

            </div>
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
        collapseClass: function() {
            return '.collapse-' + this.basketId + '-' + this.product.id;
        },
        headerId: function() {
            return '#header-' + this.basketId + '-' + this.product.id;
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

            $(collapseClass).on('show.bs.collapse', function() {
                $(headerId + " i").addClass("reversed");
                $(headerId).addClass("opened");
            }).on('hide.bs.collapse', function() {
                $(headerId + " i").removeClass("reversed");
                $(headerId).removeClass("opened");
            });
        }
    }
}
</script>

<style>
.info-bubble:hover, .info-bubble:focus {
    background: rgba(0,0,0,.4);
    box-shadow: 0 1px 0 rgba(255,255,255,.4);
}

.info-bubble span {
    position: absolute;
    margin-top: 23px;
    margin-left: -35px;
    background-color: var(--main-color);
    color: var(--dark-color);
    padding: 15px;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0,0,0,.5);
    transform: scale(0) rotate(-12deg);
    transition: all .25s;
    opacity: 0;
    z-index: 10;
}
.info-bubble:hover span, .info-bubble:focus span {
    transform: scale(1) rotate(0);
    opacity: 1;
}

.opened {
    background-color: var(--second-color);
}
.radio-boxes {
    opacity: 1 !important;
}

</style>
