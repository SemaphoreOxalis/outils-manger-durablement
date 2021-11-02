const GeneralLayout = () => import(
    /* webpackChunkName: "js/GeneralLayout" */
    './components/GeneralLayout.vue'
    );

const AdminPage = () => import(
    /* webpackChunkName: "js/admin/AdminPage" */
    './components/admin/AdminPage.vue'
    );

const WasteSimulatorAdminPage = () => import(
    /* webpackChunkName: "js/admin/waste-simulation/WasteSimulatorAdminPage" */
    './components/waste-simulation/WasteSimulatorAdminPage.vue'
    );

const CarbonSimulatorAdminPage = () => import(
    /* webpackChunkName: "js/admin/carbon-simulation/CarbonSimulatorAdminPage" */
    './components/carbon-simulation/admin/CarbonSimulatorAdminPage.vue'
    );

const ProductsAdminPage = () => import(
    /* webpackChunkName: "js/admin/carbon-simulation/ProductsAdminPage" */
    './components/carbon-simulation/admin/ProductsAdminPage.vue'
    );

const RecipesAdminPage = () => import(
    /* webpackChunkName: "js/admin/carbon-simulation/RecipesAdminPage" */
    './components/carbon-simulation/admin/RecipesAdminPage.vue'
    );

const CategoriesAdminPage = () => import(
    /* webpackChunkName: "js/admin/carbon-simulation/CategoriesAdminPage" */
    './components/carbon-simulation/admin/CategoriesAdminPage.vue'
    );

const UnitsAdminPage = () => import(
    /* webpackChunkName: "js/admin/carbon-simulation/UnitsAdminPage" */
    './components/carbon-simulation/admin/UnitsAdminPage.vue'
    );

const OriginsAdminPage = () => import(
    /* webpackChunkName: "js/admin/carbon-simulation/OriginsAdminPage" */
    './components/carbon-simulation/admin/OriginsAdminPage.vue'
    );

const EquivalencesAdminPage = () => import(
    /* webpackChunkName: "js/admin/carbon-simulation/EquivalencesAdminPage" */
    './components/carbon-simulation/admin/EquivalencesAdminPage.vue'
    );

const IntroAdminPage = () => import(
    /* webpackChunkName: "js/admin/carbon-simulation/IntroAdminPage" */
    './components/carbon-simulation/admin/IntroAdminPage.vue'
    );

const CountersAdminPage = () => import(
    /* webpackChunkName: "js/admin/CountersAdminPage" */
    './components/admin/CountersAdminPage.vue'
    );

const WysiwygAdminPage = () => import(
    /* webpackChunkName: "js/admin/WysiwygAdminPage" */
    './components/admin/WysiwygAdminPage.vue'
    );

const Logs = () => import(
    /* webpackChunkName: "js/admin/Logs" */
    './components/admin/Logs.vue'
    );

const NotFound = () => import(
    /* webpackChunkName: "js/NotFound" */
    './components/NotFound.vue'
    );

const HomePage = () => import(
    /* webpackChunkName: "js/HomePage" */
    './components/HomePage.vue'
    );

const AboutUs = () => import(
    /* webpackChunkName: "js/AboutUs" */
    './components/AboutUs.vue'
    );

const WasteSimulatorLayout = () => import(
    /* webpackChunkName: "js/waste-simulation/wasteSimulator" */
    './components/waste-simulation/WasteSimulatorLayout.vue'
    );

const WasteHomePage = () => import(
    /* webpackChunkName: "js/waste-simulation/WasteHomePage" */
    './components/waste-simulation/WasteHomePage.vue'
    );

const InputPage = () => import(
    /* webpackChunkName: "js/waste-simulation/InputPage" */
    './components/waste-simulation/InputPage.vue'
    );

const ResultsPage = () => import(
    /* webpackChunkName: "js/waste-simulation/ResultsPage" */
    './components/waste-simulation/ResultsPage.vue'
    );

const CarbonSimulatorLayout = () => import(
    /* webpackChunkName: "js/carbon-simulation/CarbonSimulatorLayout" */
    './components/carbon-simulation/CarbonSimulatorLayout.vue'
    );

const CarbonHomePage = () => import(
    /* webpackChunkName: "js/carbon-simulation/CarbonHomePage" */
    './components/carbon-simulation/CarbonHomePage.vue'
    );

const BasketSimulator = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketSimulator" */
    './components/carbon-simulation/BasketSimulator.vue'
    );

const RecipesLayout = () => import(
    /* webpackChunkName: "js/carbon-simulation/RecipesLayout" */
    './components/carbon-simulation/recipes/RecipesLayout.vue'
    );

const RecipesIndex = () => import(
    /* webpackChunkName: "js/carbon-simulation/RecipesIndex" */
    './components/carbon-simulation/recipes/RecipesIndex.vue'
    );

const RecipeCreate = () => import(
    /* webpackChunkName: "js/carbon-simulation/RecipeCreate" */
    './components/carbon-simulation/recipes/RecipeCreate.vue'
    );

const RecipeEdit = () => import(
    /* webpackChunkName: "js/carbon-simulation/RecipeEdit" */
    './components/carbon-simulation/recipes/RecipeEdit.vue'
    );

const Changelog = () => import(
    /* webpackChunkName: "js/Changelog" */
    './components/Changelog.vue'
    );

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
                    name: 'home-page',
                    meta: {
                        title: 'Manger Durablement - Applications de sensibilisation'
                    }
                },
                {
                    path: 'waste-simulator',
                    component: WasteSimulatorLayout,
                    meta: {
                        title: 'Restogaspi - Combien Jetez-vous ? - Manger Durablement'
                    },
                    children: [
                        {
                            path: 'home',
                            component: WasteHomePage,
                            name: 'waste-home-page',
                        },
                        {
                            path: 'input',
                            component: InputPage,
                            name: 'input-page',
                            meta: {
                                title: 'Audit - Restogaspi - Combien Jetez-vous ? - Manger Durablement'
                            },
                        },
                        {
                            path: 'results',
                            component: ResultsPage,
                            name: 'results-page',
                            meta: {
                                title: 'Résultats - Restogaspi - Combien Jetez-vous ? - Manger Durablement'
                            },
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
                    meta: {
                        title: 'Carbon Meal - Estimate It ! - Manger Durablement'
                    },
                    children: [
                        {
                            path: 'home',
                            component: CarbonHomePage,
                            name: 'carbon-home-page',
                        },
                        {
                            path: 'basket-simulator',
                            component: BasketSimulator,
                            name: 'basket-simulator',
                            meta: {
                                title: 'Listes - Carbon Meal - Manger Durablement'
                            },
                        },
                        {
                            path: 'recipes',
                            component: RecipesLayout,
                            name: 'recipes-layout',
                            meta: {
                                title: 'Recettes de Chef - Carbon Meal - Manger Durablement'
                            },
                            children: [
                                {
                                    path: 'index',
                                    component: RecipesIndex,
                                    name: 'recipes-index',
                                },
                                {
                                    path: 'create',
                                    component: RecipeCreate,
                                    name: 'recipe-create',
                                    meta: {
                                        title: 'Nouvelle Recette de Chef - Carbon Meal - Manger Durablement'
                                    },
                                },
                                {
                                    path: 'edit/:id',
                                    component: RecipeEdit,
                                    name: 'recipe-edit',
                                    meta: {
                                        title: 'Modifier Recette de Chef - Carbon Meal - Manger Durablement'
                                    },
                                    props: true
                                },
                            ]
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
                    meta: {
                        title: 'Manger Durablement - Admin'
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
                                    path: 'equivalences',
                                    component: EquivalencesAdminPage,
                                    name: 'equivalences'
                                },
                                {
                                    path: 'recipes',
                                    component: RecipesAdminPage,
                                    name: 'recipes'
                                },
                                {
                                    path: 'intro',
                                    component: IntroAdminPage,
                                    name: 'intro'
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
                            path: 'wysiwyg',
                            component: WysiwygAdminPage,
                            name: 'wysiwyg',
                        },
                        {
                            path: 'logs',
                            component: Logs,
                            name: 'logs',
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
                    name: 'about-us',
                    meta: {
                        title: 'Mentions légales / Confidentialité - Manger Durablement'
                    },
                },
                {
                    path: '/changelog',
                    component: Changelog,
                    name: 'changelog',
                    meta: {
                        title: 'Journal des modifications - Manger Durablement'
                    },
                },
            ]
        },

        {
            path: '*',
            component: NotFound,
            meta: {
                title: 'Cette page n\'existe pas - Manger Durablement'
            },
        }
    ]
}
