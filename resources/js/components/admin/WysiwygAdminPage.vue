<template>
    <div id="wysiwyg" class="mt-4">
        <select v-model="selectedContent" class="custom-select input custom-input" style="min-width: 350px">
            <option
                v-for="content in contents"
                :key="content.id"
                :value="content">
                {{ content.name }}
            </option>
        </select>

        <span><a class="button alter" @click="showModal = true">Bibliothèque d'images</a></span>
        <div v-if="showModal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">

                            <div class="modal-body">
                                <div v-for="image in images" class="py-2">
                                    <span v-text="image.link"></span><br>
                                    <img class="footer-logo pt-2" :src="'/storage/' + image.img"/><a class="button alter ml-4" @click="clipboardIt(image.link)">Copy to clipboard</a>
                                    <hr>
                                </div>
                            </div>

                            <div class="help-modal modal-footer">
                                <button class="modal-default-button button alter" @click="showModal = false">
                                    FERMER
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <tiny-editor-component
            v-model="selectedContent.html_content"
            v-bind:original="selectedContent.original"
            v-on:save="update"
            v-on:save-new-original="updateOriginal">
        </tiny-editor-component>
    </div>
</template>

<script>
import TinyEditorComponent from "./TinyEditorComponent";
import DataBase from "../../helpers/DataBase";
export default {
    name: 'wysiwyg',
    components: {
        TinyEditorComponent
    },
    mixins: [
        DataBase
    ],
    data() {
        return {
            contents: [],
            images: [],
            showModal: false,
            selectedContent: {
                'name': '',
                'html_content': '',
                'original': '',
            },
        }
    },
    methods: {
        update(content) {
            this.selectedContent.html_content = content;
            this.updateContent(this.selectedContent);
        },
        updateOriginal(content) {
            this.selectedContent.original = content;
            this.updateContent(this.selectedContent);
        },
        clipboardIt(link) {
            console.log(link);
            navigator.clipboard.writeText(link)
                .then(() => {
                    flash('lien copié ! : ' + link);
                    this.showModal = false;
                })
                .catch(err => {
                    console.log('Something went wrong', err);
                });
        }
    },
    created() {
        this.fetchContents();
        this.fetchImages();
    },
}
</script>
