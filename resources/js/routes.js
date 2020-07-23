import Test from "./components/Test";
import Home from "./components/Home";
import Admin from "./components/Admin";

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/test',
            component: Test
        },
        {
            path: '/admin',
            component: Admin,
            props: { 'user': window.app.user }
        },
    ]
}
