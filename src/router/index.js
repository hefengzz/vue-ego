import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login/Login.vue');
const Layout = () => import('../views/Layout/index.vue');
// 一级路由
const Home = () => import('../views/Home/index.vue');
const Goods = () => import('../views/Goods/Goods.vue');
const Advert = () => import('../views/Advert/Advert.vue');
const Params = () => import('../views/Params/Params.vue');
const Order = () => import('../views/Order/index.vue');
const OrderList = () => import('../views/Order/OrderList.vue');
const OrderBack = () => import('../views/Order/OrderBack.vue');

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/goods',
                name: 'Goods',
                component: Goods
            },
            {
                path: '/params',
                name: 'Params',
                component: Params
            },
            {
                path: '/advert',
                name: 'Advert',
                component: Advert
            },
            {
                path: '/order',
                name: 'Order',
                component: Order,
                redirect: '/order/order-list',
                children: [
                    {
                        path: 'order-list',
                        name:'OrderList',
                        component: OrderList
                    },
                    {
                        path: 'order-back',
                        name:'OrderBack',
                        component: OrderBack
                    }

                ]
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },


]

const router = new VueRouter({
    routes
})

export default router;