<template>
    <div class="my-5 text-center not-found">
        <h1 class="my-5">Oups !</h1>
        <h3 class="mb-4">Il semble que la page que vous avez demandée n'existe pas</h3>
        <router-link to="/" tag="span">
            <button class="button big-button d-flex p-4">
                <div class="icon align-self-center mr-4"></div>
                <div class="big-button-line-height"><strong>Retournez</strong> <br> <small>à l'accueil</small></div>
            </button>
        </router-link>
    </div>
</template>

<script>
    export default {
        mounted() {
            $("body").addClass("dark");
            $("footer").addClass("hide");
        },

        destroyed() {
            $("body").removeClass("dark");
            $("footer").removeClass("hide");

        }
    }
</script>

<style>
    .not-found button {
        margin: 50px auto;
    }

    .dark {
        background-color: var(--dark-color);
        color: var(--main-color);
    }

    .hide {
        display: none;
    }
</style>
