<template>
    <editor
        :api-key="getTinyKey"
        :init="getTinyConfig"
        v-model="content"
        v-on:onChange="this.update"
        v-on:onInit="this.loaded">
    </editor>
</template>

<script>
import tinyConfig from "./TinyConfig";
export default {
    name: 'tiny-editor',
    components: {
        editor: () => import(/* webpackChunkName: "tinymce" */ "@tinymce/tinymce-vue"),
    },
    props: {
        value: {
            type: String,
            default: 'Type here'
        },
        type: {
            type: [Boolean, String],
            default: false
        }
    },
    computed: {
        getTinyConfig: function () {
            return tinyConfig.getConfig(this.type);
        },
        getTinyKey: function () {
            return tinyConfig.getAPIKey();
        }
    },
    data: function () {
        return {
            content: this.value, // default to the passed value
            editor: false
        }
    },
    methods: {
        update: function() {
            // pass updated content back to the parent
            this.$emit('input', this.content);
        },
        loaded: function(event, editor) {
            this.editor = editor;
        }
    },
    mounted() {
        //console.log(tinyConfig.getConfig());
    }
}
</script>

