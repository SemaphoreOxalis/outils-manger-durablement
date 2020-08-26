import Test from "./components/Test";
import InputPage from "./components/waste-simulation/InputPage";
import ResultsPage from "./components/waste-simulation/ResultsPage";
import NotFound from "./components/NotFound";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/waste-simulation/HomePage";

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
            component: HomePage,
            name: 'home-page'
        },
        {
            path: '/test',
            component: Test,
            name: 'test'
        },
        {
            path: '/input',
            component: InputPage,
            name: 'input-page'
        },
        {
            path: '/results',
            component: ResultsPage,
            name: 'results-page',
            props: true
        },
        {
            path: '/admin',
            component: AdminPage,
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
