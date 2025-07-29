import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from './views/About.vue'
import HomeView from './views/Home.vue'
import NotFoundView from './views/NotFound.vue'
import ServicesView from './views/Services.vue'


const routes = [
  {path: '/', component: HomeView},
  {path: '/about', component: AboutView},
  {path: '/services', component: ServicesView},
  {path: '/notfound-404-error', component : NotFoundView}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     { path: '/',
//       name: 'home',
//       component : Home
//     },

//     { path: '/services',
//       name: 'Services',
//       component : Services
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     },
//     { path: '/notfound-404-error',
//       name: 'NotFound',
//       component : NotFound
//     }
//   ]
// })
