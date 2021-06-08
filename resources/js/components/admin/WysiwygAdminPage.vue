<template>
    <div id="wysiwyg" class="mt-4">
        <select v-model="selectedContent">
            <option v-for="content in contents" v-bind:value="content"> {{ content.name }}</option>
        </select>

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
        }
    },
    created() {
        this.fetchContent();
    }
}
</script>
