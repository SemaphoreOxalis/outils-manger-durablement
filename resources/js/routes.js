import Test from "./components/Test";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Input from "./components/Input";

export default {
    scrollBehavior() {
      return { x: 0, y: 0 };
    },

    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/input',
            component: Input
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
