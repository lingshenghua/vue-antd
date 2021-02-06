import {markRaw} from 'vue'
import {RouteRecordRaw} from 'vue-router'
import {RouterTransition} from '@/components/transition'
import {h} from 'vue'

const routeName = 'dashboard'

const routes: Array<RouteRecordRaw> = [{
    path: '/dashboard',
    name: routeName,
    redirect: '/dashboard/welcome',
    component: h(markRaw(RouterTransition), {notNeedKey: true}),
    meta: {
        title: '物流规划',
        icon: 'icon-zhuomian'
    },
    children: [
        {
            path: 'welcome',
            name: `${routeName}-welcome`,
            meta: {
                title: '产品管理',
                icon: 'icon-zhuomian',
            },
            component: () => import(/* webpackChunkName: "dashboard-welcome" */ '@/views/shared/dashboard/welcome/index.vue')
        },
        {
            path: 'custom-a-custom-modal',
            name: `${routeName}-custom-modal`,
            meta: {
                title: '线路管理',
                icon: 'icon-zhuomian',
                keepAlive: true
            },
            component: () => import(/* webpackChunkName: "dashboard-welcome" */ '@/views/shared/dashboard/welcome/index.vue')
        },
        {
            path: 'button',
            name: `${routeName}-button`,
            meta: {
                title: '线路时效',
                icon: 'icon-zhuomian',
                keepAlive: true
            },
            component: () => import(/* webpackChunkName: "dashboard-welcome" */ '@/views/shared/dashboard/welcome/index.vue')
        },
        {
            path: 'form',
            name: `${routeName}-form`,
            meta: {
                title: '批次与报价',
                icon: 'icon-zhuomian',
                keepAlive: true
            },
            component: () => import(/* webpackChunkName: "dashboard-welcome" */ '@/views/shared/dashboard/welcome/index.vue')
        },
        {
            path: 'icons',
            name: `${routeName}-icons`,
            meta: {
                title: '特价产品',
                icon: 'icon-zhuomian',
                keepAlive: true
            },
            component: () => import(/* webpackChunkName: "dashboard-welcome" */ '@/views/shared/dashboard/welcome/index.vue')
        },
    ]
}]

export default routes
