<template>
    <div class="d-flex flex-column align-items-end vh-100">
        <main class="container">
            <div class="py-4">
                <router-view></router-view>
            </div>

            <div class="text-center my-2 mb-4">
                <a class="button"
                   href="https://airtable.com/shrFZqKu6MuVIK5DZ" target="_blank">
                    <i class="icon mr-2"></i>{{ feedback_text }}
                </a>
            </div>
        </main>

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
                } else {
                    this.fetchFooter('Footer General');
                }
            }
        },
        data() {
            return {
                footer: '',
            }
        },
        mounted() {
            this.fetchFooter('Footer General');
        }
    }
</script>
