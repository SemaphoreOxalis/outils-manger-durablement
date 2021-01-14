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
            <div class="pt-2">
                <p class="text-center">
                    {{ this_is_from_Niort_CH }}<br>{{ financed_by }}
                </p>
                <div class="d-flex justify-content-around pb-3">
                    <img class="footer-logo" src="/images/logo-carasso.svg" v-bind:alt="images_alt_text.carasso">
                    <img class="footer-logo" src="/images/logo-region-NA.svg" v-bind:alt="images_alt_text.region_na">
                    <img class="footer-logo" src="/images/logo-UE.svg" v-bind:alt="images_alt_text.europe">
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import GeneralLayoutText from "../../texts/GeneralLayoutText";
    export default {
        mixins: [
            GeneralLayoutText
        ]
    }
</script>
