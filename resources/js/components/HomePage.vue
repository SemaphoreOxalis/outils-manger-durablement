<template>
    <div class="py-4 px-4">
        <div v-html="title"></div>

        <div v-html="text"></div>

        <div class="row">
            <div class="col">
                <router-link to="/waste-simulator" tag="span">
                    <button class="button big-button d-flex p-4 m-2 justify-content-center">
                        <div class="icon align-self-center mr-4"></div>
                        <div class="text-left big-button-line-height">
                            <small>{{ btns.i_am_simulating }}</small> <br> <strong>{{ btns.food_waste }}</strong>
                        </div>
                    </button>
                </router-link>
            </div>

            <div class="col">
                <router-link to="/carbon-simulator" tag="span">
                    <button class="button big-button d-flex p-4 m-2 justify-content-center">
                        <div class="icon align-self-center mr-4"></div>
                        <div class="text-left big-button-line-height">
                            <small>Je simule le</small> <strong>{{ btns.carbon_impact }}</strong> <br> <small>de mes repas</small>
                        </div>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import HomePageText from "../../texts/HomePageText";
    import DataBase from "../helpers/DataBase";
    export default {
        mixins: [
            HomePageText,
            DataBase
        ],
        data() {
            return {
                title: `<div class="loader-spinner"></div>`,
                text: `<div class="loader-spinner"></div>`
            }
        },
        async mounted() {
            this.title = await this.fetchContent('Titre Page d\'accueil');
            this.text = await this.fetchContent('Texte Page d\'accueil');
        },
    }
</script>
