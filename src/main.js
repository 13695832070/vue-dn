import Vue from "vue"
import App from "./app.vue"
import Images from './components/defImage/index.js'

Vue.use(Images)

const vm = new Vue({
  el: "#app",
  render: (h) => h(App),
})