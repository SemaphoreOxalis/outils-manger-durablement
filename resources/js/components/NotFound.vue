<template>
    <div class="my-5 text-center not-found">
        <h1 class="my-5">{{ oops }}</h1>
        <h3 class="mb-4">{{ not_found }}</h3>
        <router-link to="/" tag="span">
            <button class="button big-button d-flex p-4">
                <div class="icon align-self-center mr-4"></div>
                <div class="big-button-line-height"><strong>{{ go_back }}</strong> <br> <small>{{ to_home }}</small></div>
            </button>
        </router-link>
    </div>
</template>

<script>
    import NotFoundPageText from "../../texts/NotFoundPageText";

    export default {
        mixins: [
            NotFoundPageText
        ],

        mounted() {
            $("body").addClass("dark");
            $("footer").addClass("hide");
            $("#title").addClass("hide");
        },

        destroyed() {
            $("body").removeClass("dark");
            $("footer").removeClass("hide");
            $("#title").removeClass("hide");
        }
    }
</script>

