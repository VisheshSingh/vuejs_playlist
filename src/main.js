import Vue from "vue";
import App from "./App.vue";
// import Ninjas from "./Ninjas.vue";

// Vue.component("ninjas", Ninjas);

// Event Bus for communicating between sibling components
export const bus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
