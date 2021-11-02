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

// Nécessaire pour le stepper de la page Input
require('materialize-css/dist/js/materialize.min');

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

// Bus d'évenements qui va nous permettre de lancer des évenements entre composants qui ne sont pas forcément parent/enfants
window.events = new Vue();

// permet de pouvoir faire
// flash('message', warning) ou
// flash('message')
// depuis n'importe où dans l'application
window.flash = function (message, level = 'success') {
    window.events.$emit('flash', { message, level});
}

// Only way to actually check if grand-grand-....-grand-child components DOM rendered without a dirty setTimeout
// ($nextTick fires too soon sometimes)
window.waitForElementToRenderThen = function(element, callback) {
    let observer = new MutationObserver(() => {
        if (document.contains(document.querySelector(element))) {
            observer.disconnect();
            callback();
        }
    });
    observer.observe(document, {attributes: true, childList: true, subtree:true});
}

// Afin de pouvoir modifier les tags <meta> depuis Vue
const router = new VueRouter(routes);

router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

// Initialisation de Vue
const app = new Vue({
    el: '#app',
    router: router,
    components: {
        'navigation-links': () => import(
            /* webpackChunkName: "js/navLinks" */
            './components/NavigationLinks.vue'
            ),
        'flash': () => import(
            /* webpackChunkName: "js/flashMsg" */
            './components/FlashMessage.vue'
            ),
    }
});
