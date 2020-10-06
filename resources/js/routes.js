import GeneralLayout from "./components/GeneralLayout";
import AdminPage from "./components/AdminPage";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import WasteSimulatorLayout from "./components/waste-simulation/WasteSimulatorLayout";
import WasteHomePage from "./components/waste-simulation/WasteHomePage";
import InputPage from "./components/waste-simulation/InputPage";
import ResultsPage from "./components/waste-simulation/ResultsPage";

import Test from "./components/Test";

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
            component: GeneralLayout,
            children: [
                {
                    path: '/',
                    component: HomePage,
                    name: 'home-page'
                },
                {
                    path: 'waste-simulator',
                    component: WasteSimulatorLayout,
                    children: [
                        {
                            path: '',
                            component: WasteHomePage,
                            name: 'waste-home-page',
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
                    ]
                },
                {
                    path: '/test',
                    component: Test,
                    name: 'test'
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
                    path: '/about',
                    component: AboutUs,
                    name: 'about-us'
                },
            ]
        },

        {
            path: '*',
            component: NotFound
        }
    ]
}
