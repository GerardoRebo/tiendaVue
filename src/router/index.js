import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import User from "../apis/User";

const routes = [
  { path: '/', name: 'Home', component: Home, meta: {  requiresAuth: false } },
  { path: '/login', name: 'Login', component: Login, meta: { requiresAuth: false } },
  { path: '/register', name: 'Register', component: Register, meta: { requiresAuth: false } },
]
const router = createRouter({
  history: createWebHistory(import.meta.VITE_BASE_URL), routes
});
router.beforeEach(async (to) => {

  if (!to.meta.requiresAuth) {
    return;
  }

  const response = await User.auth().catch(() => console.log("Aun no estás autorizado"));

  if (!response) {

    store.commit("setIsLoggedIn",false);
    localStorage.removeItem("token")
    return '/login'

  }
  store.commit("setAuthUser", response.data[0]);
  store.commit("setRoles", response.data[1]);


  if (to.meta.hasOrganization && !response.data[0].organization_id) {
    return '/creaorganizacion';
  }
  if (to.meta.requiresAuth && !store.state.isLoggedIn) {
    return { path: '/login' };
  }
  if (to.meta.requireAdministrationRole && response.data[0].roles.some(role => role.name == 'Cajero')) {
    return { path: '/puntoventa' };
  }
})

export default router;