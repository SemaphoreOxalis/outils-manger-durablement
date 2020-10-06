import GeneralLayout from "./components/GeneralLayout";

import AdminPage from "./components/AdminPage";
import WasteSimulatorAdminPage from "./components/waste-simulation/WasteSimulatorAdminPage";
import CarbonSimulatorAdminPage from "./components/carbon-simulation/admin/CarbonSimulatorAdminPage";
import ProductsAdminPage from "./components/carbon-simulation/admin/ProductsAdminPage";
import CategoriesAdminPage from "./components/carbon-simulation/admin/CategoriesAdminPage";
import UnitsAdminPage from "./components/carbon-simulation/admin/UnitsAdminPage";
import OriginsAdminPage from "./components/carbon-simulation/admin/OriginsAdminPage";
import CountersAdminPage from "./components/CountersAdminPage";

import NotFound from "./components/NotFound";

import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";

import WasteSimulatorLayout from "./components/waste-simulation/WasteSimulatorLayout";
import WasteHomePage from "./components/waste-simulation/WasteHomePage";
import InputPage from "./components/waste-simulation/InputPage";
import ResultsPage from "./components/waste-simulation/ResultsPage";

import CarbonSimulatorLayout from "./components/carbon-simulation/CarbonSimulatorLayout";
import CarbonHomePage from "./components/carbon-simulation/CarbonHomePage";
import BasketSimulator from "./components/carbon-simulation/BasketSimulator";

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
                            path: 'home',
                            component: WasteHomePage,
                            name: 'waste-home-page',
                        },
                        {
                            path: 'input',
                            component: InputPage,
                            name: 'input-page'
                        },
                        {
                            path: 'results',
                            component: ResultsPage,
                            name: 'results-page',
                            props: true
                        },
                        {
                            path: '',
                            redirect: 'home'
                        }
                    ]
                },
                {
                    path: 'carbon-simulator',
                    component: CarbonSimulatorLayout,
                    children: [
                        {
                            path: 'home',
                            component: CarbonHomePage,
                            name: 'carbon-home-page',
                        },
                        {
                            path: 'basket-simulator',
                            component: BasketSimulator,
                            name: 'basket-simulator'
                        },
                        {
                            path: '',
                            redirect: 'home'
                        }
                    ]
                },
                {
                    path: '/admin',
                    component: AdminPage,
                    props: { 'user': window.App.user },
                    beforeEnter(to, from, next) {
                        if (window.App.signedIn) {
                            next()
                        } else {
                            window.location.href = '/login'
                        }
                    },
                    children: [
                        {
                            path: 'waste-simulator',
                            component: WasteSimulatorAdminPage,
                            name: 'waste-admin'
                        },
                        {
                            path: 'carbon-simulator',
                            component: CarbonSimulatorAdminPage,
                            children: [
                                {
                                    path: 'products',
                                    component: ProductsAdminPage,
                                    name: 'products'
                                },
                                {
                                    path: 'categories',
                                    component: CategoriesAdminPage,
                                    name: 'categories'
                                },
                                {
                                    path: 'units',
                                    component: UnitsAdminPage,
                                    name: 'units'
                                },
                                {
                                    path: 'origins',
                                    component: OriginsAdminPage,
                                    name: 'origins'
                                },
                                {
                                    path: '',
                                    redirect: 'products'
                                },
                            ]
                        },
                        {
                            path: 'counters',
                            component: CountersAdminPage,
                            name: 'counters',
                        },
                        {
                            path: '',
                            redirect: 'waste-simulator'
                        }
                    ],
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
