<template>
    <div id="wysiwyg" class="mt-4">
        <tiny-editor-component v-model="content" @input="log"></tiny-editor-component>
    </div>
</template>

<script>
import TinyEditorComponent from "./TinyEditorComponent";
export default {
    name: 'wysiwyg',
    components: {
        TinyEditorComponent
    },
    mixins: [
    ],
    data() {
        return {
            content: `<div class="pt-2">
                        <p class="text-center">
                            Cet outil est le fruit du travail du CH de Niort, <br/>
                            dans le cadre d'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l'Europe
                        </p>
                        <div class="d-flex justify-content-around pb-3">
                            <img class="footer-logo" src="/images/logo-carasso.svg" alt="logo">
                            <img class="footer-logo" src="/images/logo-region-NA.svg" alt="logo">
                            <img class="footer-logo" src="/images/logo-UE.svg" alt="logo">
                        </div>
                    </div>`,
        }
    },
    methods: {
        log: function() {
            console.log(this.content);
        }
    },
    created() {

    }
}
</script>
