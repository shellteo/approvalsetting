// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileInvoice, faFileSignature, faUserAstronaut, faUserCircle, faBell, faTachometerAlt, faLanguage, faPlus, faTimes, faSave, faCloudUploadAlt, faPrint, faClock, faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileInvoice)
library.add(faFileSignature)
library.add(faUserAstronaut)
library.add(faUserCircle)
library.add(faBell)
library.add(faTachometerAlt)
library.add(faLanguage)
library.add(faPlus)
library.add(faTimes)
library.add(faSave)
library.add(faCloudUploadAlt)
library.add(faPrint)
library.add(faClock)
library.add(faEdit)
library.add(faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
