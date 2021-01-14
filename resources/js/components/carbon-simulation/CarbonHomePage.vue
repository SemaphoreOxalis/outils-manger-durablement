<template>
    <div class="py-4 px-4">

        <div class="row">
            <div class="col">
                <div class="info p-4 m-4">
                    <p>
                        <i>{{ no_private_info_sent_disclaimer }}</i>
                    </p>
                </div>

                <div class="info p-4 m-4" v-if="previousBasketsDetectedInLocalStorage">
                    <p>{{ it_seems_you_have_baskets_from }} <strong>{{ this.previousBasketsDate }}</strong></p>
                    <div class="d-flex flex-column align-items-center">
                        <button class="button big-button d-flex p-4 justify-content-center mb-2" @click="goToPreviousBaskets">
                            <div class="icon align-self-center mr-4"></div>
                            <div class="text-left big-button-line-height">
                                <strong>{{ prevBtn.goTo }}</strong><br><small>{{ prevBtn.basket }}<br>{{ prevBtn.from }} {{ this.previousBasketsDate }}</small>
                            </div>
                        </button>

                        <div class="text-center">
                            <button @click="deleteBaskets" class="button alter"><span class="icon mr-4"></span>{{ delete_all_data }}</button>
                        </div>
                    </div>
                </div>

                <p>{{ on_this_tool }} {{ this.counters.productsCounter }} {{ products_have_been_added_to }} {{ this.counters.basketCounter }} {{ bskets }}</p>

            </div>

            <div class="col p-4 m-4">
                <p>{{ to_use_this }} <strong>{{ you_ll_need }}</strong> :</p>
                <ul class="browser-default">
                    <li>{{ shopping_list }}</li>
                </ul>
                <p>
                    <strong>{{ you_ll_get_results_in_15m }}</strong>
                </p>

                <router-link to="basket-simulator" tag="span" v-if="!previousBasketsDetectedInLocalStorage">
                    <button class="button big-button d-flex p-4 m-2 justify-content-center">
                        <div class="icon align-self-center mr-4"></div>
                        <div class="text-left big-button-line-height">
                            <small>{{ lnchBtn.im_ready }}</small> <br> <strong>{{ lnchBtn.start }}</strong> <br> <small>{{ lnchBtn.new_sim }}</small>
                        </div>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import GeneralText from "../../../texts/GeneralText";
    import HomePageText from "../../../texts/carbonSimulator/HomePageText";
    import DateFormatter from "../../helpers/DateFormatter";
    import LocalStorageHelper from "../../helpers/LocalStorageHelper";
    import DataBase from "../../helpers/DataBase";
    export default {
        mixins: [
            GeneralText,
            HomePageText,
            DateFormatter,
            LocalStorageHelper,
            DataBase
        ],
        data() {
            return {
                counters: {
                    basketCounter: 0,
                    productsCounter: 0
                },
                previousBasketsDate: null,
                previousBasketsDetectedInLocalStorage: false,
            }
        },
        created() {
            this.checkPreviousBasketsFromLocalStorage();
            this.fetchCountersFromDB();
        },
        methods: {
            checkPreviousBasketsFromLocalStorage() {
                if (localStorage.hasOwnProperty('baskets')) {
                    this.previousBasketsDetectedInLocalStorage = true;
                    this.previousBasketsDate = this.getBasketsDateFromLocalStorage();
                }
            },
            goToPreviousBaskets() {
                this.$router.push({name: 'basket-simulator'})
            },
            deleteBaskets() {
                this.deleteBasketsFromLocalStorage();
                this.previousBasketsDetectedInLocalStorage = false;

                flash("Vos paniers ont bien été supprimés");
            },
        },
    }
</script>
