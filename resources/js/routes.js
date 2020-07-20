import Test from "./components/Test";
import Home from "./components/Home";

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
        }
    ]
}
