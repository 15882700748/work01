import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PutOnRecord from '../views/patient/PutOnRecord'
import doctor from '../views/highLevelDoctor/doctor'
import CloudPharmacy from '../views/cloudPharmacy/CloudPharmacy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
      path: '/villageDoctor',
      name: 'putOnRecord',
      component: PutOnRecord
    },
    {
		path: '/superiorDoctor',
		name: 'doctor',
		component: doctor
    },
    {
      path: '/cloudPharmacy',
      name: 'cloudPharmacy',
      component: CloudPharmacy
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
