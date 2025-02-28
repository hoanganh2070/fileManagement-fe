import { createRouter, createWebHashHistory } from "vue-router"
import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'

const routes = [
    { path: '/signup', component: SignUp },
    { path: '/', component: HomePage }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
