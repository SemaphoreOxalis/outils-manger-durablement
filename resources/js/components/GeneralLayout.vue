<template>
    <div class="d-flex flex-column align-items-end vh-100">
        <main class="container mb-auto">
            <div class="py-4">
                <router-view></router-view>
            </div>
        </main>

        <div class="text-center mt-auto mb-2 sticky-link">
            <a class="button alter" href="https://airtable.com/shrFZqKu6MuVIK5DZ" target="_blank">
                <i class="icon mr-2"></i>J'ai une question <br> ou un retour à faire
            </a>
        </div>

        <footer class="mt-auto w-100" id="general-footer">
            <div v-html="footer"></div>
        </footer>
    </div>
</template>

<script>
    import GeneralLayoutText from "../../texts/GeneralLayoutText";
    import DataBase from "../helpers/DataBase";
    export default {
        mixins: [
            GeneralLayoutText,
            DataBase,
        ],
        watch: {
            $route: function(to, from) {
                if(to.path.startsWith('/waste-simulator')) {
                    this.fetchFooter('Footer Gaspi');
                } else if (to.path.startsWith('/carbon-simulator')) {
                    this.fetchFooter('Footer Carbone');
                } else if (to.path.startsWith('/admin')) {
                    this.fetchFooter('Footer Admin');
                } else {
                    this.fetchFooter('Footer General');
                }
            }
        },
        data() {
            return {
                footer: `<div class="loader-spinner"></div>`,
            }
        },
        mounted() {
            this.fetchFooter('Footer General');
        }
    }
</script>
