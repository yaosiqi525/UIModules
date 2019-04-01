import Vue from 'vue'
import Router from 'vue-router'
import EditorView from '@/pages/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: EditorView
    }
  ]
})
