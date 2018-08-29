import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/about/About.vue'
import Detail from '../components/detail/Detail.vue'
import Experience from '../components/detail/experience/Experience.vue'
import Skill from '../components/detail/skill/Skill.vue'
import Spec from '../components/detail/spec/Spec.vue'
import Home from '../components/home/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/detail',
      component: Detail,
      children: [
        {
          path: 'experience',
          component: Experience
        },
        {
          path: 'skill',
          component: Skill
        },
        {
          path: 'spec',
          component: Spec
        },
        {
          path: 'about',
          component: About
        },
        {
          path: '',
          component: Experience
        }
      ]
    }
  ]
})
