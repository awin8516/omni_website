import Vue from 'vue'
import Router from 'vue-router'
/**
import Home from '@/components/home'
import About from '@/components/about'
import Service from '@/components/service'
import Work from '@/components/work'
/**/
/**/
const Home = () => import('@/components/home')
const About = () => import('@/components/about')
const Service = () => import('@/components/service')
const Work = () => import('@/components/work')
/**/
Vue.use(Router)

export default new Router({
  mode: 'history',
  //linkActiveClass: 'link-active',
  linkExactActiveClass : 'active',
  routes: [
    /*{
      path: '/',
      redirect: '/home'
    },*/
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    }
  ]
})
