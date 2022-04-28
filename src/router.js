import { createRouter, createWebHashHistory } from 'vue-router'

// imports of pages
import HelloWorld from './pages/HelloWorld.vue'
import Page2 from './pages/page2.vue'

// routes
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/page2', component: Page2 } 
]

// createRouter
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// export
export default router
