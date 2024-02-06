import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import SignUpView from '../views/auth/SignUpView.vue'
import HomeView from '../views/HomeView.vue'
import ToDosView from '../views/ToDosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignUpView
    },
    {
      path: '/todos/:userId',
      name: 'todos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ToDosView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('userId');
  
  // If the user is not logged in and tries to access the home page,
  // allow them to access it
  if (!isLoggedIn && to.path === '/') {
    next();
  } 
  // If the user is logged in and tries to access the home page,
  // redirect them to a different page (e.g., dashboard or todos page)
  else if (isLoggedIn && to.path === '/') {
    next('/todos/:userId'); 
  } 
  else {
    next(); // Allow access to other routes
  }
});


export default router
