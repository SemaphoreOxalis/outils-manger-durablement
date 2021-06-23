<template>
    <div>
        <editor
            :api-key="getTinyKey"
            :init="getTinyConfig"
            v-model="content"
            v-on:onInit="this.loaded">
        </editor>
        <div class="pt-2">
            <button class="button" @click="save">Sauvegarder</button>
            <button class="button alter" @click="restore">Restaurer original</button>
            <button class="button alter" @click="setAsOriginal">Sauvegarder en tant que nouvel original</button>
        </div>
    </div>
</template>

<script>
import 'tinymce/tinymce.min';
import "tinymce/themes/silver";
import "tinymce/icons/default";

import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/spellchecker';
import 'tinymce/plugins/help';
import 'tinymce/plugins/media';
import 'tinymce/plugins/textcolor';

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
        },
        original: {
            type: String,
            default: ''
        },
    },
    watch: {
        value: function(newVal, oldVal) {
            this.content = newVal;
        }
    },
    computed: {
        getTinyConfig: function() {
            return tinyConfig.getConfig(this.type);
        },
        getTinyKey: function() {
            return tinyConfig.getAPIKey();
        },
    },
    data: function () {
        return {
            content: this.value,
            editor: false
        }
    },
    methods: {
        save: function() {
            if(confirm("Voulez vous vraiment sauvegarder ?")) {
                this.$emit('save', this.content);
            }
        },
        restore: function() {
            this.content = this.original;
            flash('ATTENTION : cette fonctionnalité ne fait que restaurer le texte original. Il vous appartient de sauvegarder', 'warning');
        },
        setAsOriginal: function() {
            if(confirm("Voulez vous vraiment remplacer l'original de ce template ?")) {
                this.$emit('save-new-original', this.content);
            }
        },
        loaded: function(event, editor) {
            this.editor = editor;
        }
    },
    mounted() {
        //console.log(tinyConfig.getConfig());
    },

    // beforeDestroy() {
    //     this.editor.save();
    //     this.editor.remove();
    // }
}
</script>

