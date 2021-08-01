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

const CountersAdminPage = () => import(
    /* webpackChunkName: "js/admin/CountersAdminPage" */
    './components/admin/CountersAdminPage.vue'
    );

const WysiwygAdminPage = () => import(
    /* webpackChunkName: "js/admin/WysiwygAdminPage" */
    './components/admin/WysiwygAdminPage.vue'
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
                            path: 'recipes',
                            component: RecipesLayout,
                            name: 'recipes',
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
                                },
                                {
                                    path: 'edit/:id',
                                    component: RecipeEdit,
                                    name: 'recipe-edit',
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
                                    path: 'recipes',
                                    component: RecipesAdminPage,
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
                            path: 'wysiwyg',
                            component: WysiwygAdminPage,
                            name: 'wysiwyg',
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
