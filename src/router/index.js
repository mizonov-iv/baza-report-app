import { createWebHistory, createRouter } from 'vue-router'

import HomeView from "../views/HomeView.vue"
import CallReport from "../views/CallReportView.vue"
import DailyReport from "../views/DailyReportView.vue"
import SalaryCount from "../views/SalaryCount.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView},
        { path: '/call-report', component: CallReport},
        { path: '/daily-report', component: DailyReport},
        { path: '/salary-count', component: SalaryCount},
    ]
})