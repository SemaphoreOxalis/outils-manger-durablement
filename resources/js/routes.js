import Test from "./components/Test";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Input from "./components/Input";
import Results from "./components/Results";
import NotFound from "./components/NotFound";

export default {

    // Redirection automatique en haut de la page lors de changement de vue
    scrollBehavior() {
      return { x: 0, y: 0 };
    },

    // Permet la navigation sans rechargement de page
    mode: 'history',

    // A chaque URL correspond un fichier .vue dans resources/js/components
    // Ce sont les "pages" de notre SPA
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/test',
            component: Test,
            name: 'test'
        },
        {
            path: '/input',
            component: Input,
            name: 'input'
        },
        {
            path: '/results',
            component: Results,
            name: 'results',
            props: true
        },
        {
            path: '/admin',
            component: Admin,
            props: { 'user': window.App.user },
            beforeEnter(to, from, next) {
                if (window.App.signedIn) {
                    next()
                } else {
                    window.location.href = 'login'
                }
            }
        },
        {
            path: '*',
            component: NotFound
        }
    ]
}
