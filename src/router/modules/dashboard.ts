import {markRaw} from 'vue'
import {RouteRecordRaw} from 'vue-router'
import {RouterTransition} from '@/components/transition'
import {h} from 'vue'

const routeName = 'dashboard'

const routes: Array<RouteRecordRaw> = [{
    path: '/dashboard',
    name: routeName,
    meta: {
        title: '物流规划',
        icon: 'icon-zhuomian'
    },
    component: () => import(/* webpackChunkName: "dashboard-welcome" */ '@/views/shared/dashboard/welcome/index.vue')
}]

export default routes
