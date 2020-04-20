import Vue from 'vue'
import App from './App.vue'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import VueRouter from "vue-router";
import {routes} from "@/routes";

/*var firebaseConfig = {
  apiKey: "AIzaSyCYoWyp2qIECxLfb9adne99sFzGFq5-OPU",
  authDomain: "grudsillo1.firebaseapp.com",
  databaseURL: "https://grudsillo1.firebaseio.com",
  projectId: "grudsillo1",
  storageBucket: "grudsillo1.appspot.com",
  messagingSenderId: "1064739899846",
  appId: "1:1064739899846:web:12dc45fc7e1cec9da50ac7",
  measurementId: "G-ZEXL4XBT12"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();*/

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
