<template>
    <div class="d-flex flex-column align-items-end vh-100">
        <main class="container">
            <div class="py-4">
                <router-view></router-view>
            </div>
        </main>

        <footer class="mt-auto w-100">
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
