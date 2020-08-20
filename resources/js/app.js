/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// Nécessaires pour Vue et son fonctionnement en SPA
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// principalement bootstrap et Axios pour les appels AJAX
require('./bootstrap');

// Remplace le routeur de Laravel pour les URLS concernés par Vue (SPA)
Vue.use(VueRouter);

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/Test.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Composants enfants généraux à toute l'application
Vue.component('flash', require('./components/Flash.vue').default);
Vue.component('navigation-links', require('./components/NavigationLinks.vue').default);


// Bus d'évenements qui va nous permettre de lancer des évenements entre composants qui ne sont pas forcément parent/enfants
window.events = new Vue();

// permet de pouvoir faire
// flash('message', warning) ou
// flash('message')
// depuis n'importe où dans l'application
window.flash = function (message, level = 'success') {
    window.events.$emit('flash', { message, level});
}

// Initialisation de Vue
const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});
