import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/pages/Main'
import EditorView from '@/pages/Editor'
import EChartsView from '@/pages/ECharts'
import Xlsx from '@/pages/Xlsx'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: MainView
  },
  {
    path: '/editor',
    component: EditorView
  },
  {
    path: '/echarts',
    component: EChartsView
  },
  {
    path: '/xlsx',
    component: Xlsx
  }
  ]
})
