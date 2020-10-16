<template>
    <div class="mx-5">
        <div v-if="signedIn">
            <h2 class="my-4">{{ admin_title }}</h2>
            <div class="admin-nav">
                <router-link to="/admin/waste-simulator" tag="span">
                    <button class="button alter">Outil Gaspi</button>
                </router-link>

                <router-link to="/admin/carbon-simulator" tag="span">
                    <button class="button alter">Outil Carbone</button>
                </router-link>

                <router-link to="/admin/counters" tag="span">
                    <button class="button alter">Compteurs</button>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
        <div v-else>
            {{ go_away }}
        </div>
    </div>
</template>

<script>
import AdminPageText from "../../texts/AdminPageText";

export default {

    // déclaration de dépendance à ces bibliothèques de fonctions
    mixins: [
        AdminPageText
    ],

    computed: {

        // L'utilisateur est-il bien authentifié ?
        signedIn() {
            return window.App.signedIn;
        }
    },
}
</script>

<style>
.admin-nav {
    text-align: center;
    padding: 10px;
}

.admin-nav span.router-link-active button.alter {
    background-color: var(--main-color);
}
</style>
