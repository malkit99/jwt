import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard'
import Login from '../components/auth/Login'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/login'
    },

    {
        path: '/login',
        component: Login,
        name:'Login'
     },

    {
        path: '/dashboard',
        component: Dashboard,
        name:'Dashboard'
    },
  ]


export default new VueRouter({
    routes,
    mode:"history"
})
