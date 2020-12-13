import Vue from "vue"
import App from "./app.vue"
import Images from './components/defImage/index.js'
<<<<<<< HEAD
import markUserAuthorize from './middleware/authorize.js'

Vue.use(Images)

hccms.init.auth({
  deptid: DEPTID,
  activityid: ACTIVITYID,
  scenetype: SCENETYPE,
  actiontype: 0
}, function (e) {
  markUserAuthorize(e)
  const vm = new Vue({
    el: "#app",
    render: (h) => h(App),
  })
=======

Vue.use(Images)

const vm = new Vue({
  el: "#app",
  render: (h) => h(App),
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
})