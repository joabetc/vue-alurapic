import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'

import './directives/Transform'

import Veevalidate from 'vee-validate'
import msg from './en'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/test.css'

import './assets/js/test.js'

import 'bootstrap/dist/js/bootstrap.js'

Vue.use(VueResource)
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {
  req.headers.set('Authorization', 'secure info here')
    console.log('Dealing with the request')

    next(res => {
      console.log('Dealing with the response')
      console.log(res.body)
    })
})

Vue.use(VueRouter)
Vue.use(Veevalidate, {
  locale: 'en',
  dictionary: {
    en: {
      messages: msg
    }
  }
})

const router = new VueRouter({ 
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
