import Vue from "vue"
import App from "./app.vue"
import Images from './components/defImage/index.js'
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
})