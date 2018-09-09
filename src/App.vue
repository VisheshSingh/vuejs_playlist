<template>
  <div>
    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer> -->
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of form</h3>
        <p>Information about form</p>
      </div> 
      <div slot="form-fields">
        <input type="text" placeholder="Name" required>
        <input type="password" placeholder="Password" required>
      </div>  
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div> 
    </form-helper>
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
// import Ninjas from "./components/Ninjas.vue";
import formHelper from "./components/formHelper.vue";

export default {
  components: {
    // "app-header": Header,
    // "app-ninjas": Ninjas,
    // "app-footer": Footer,
    "form-helper": formHelper
  },
  data() {
    return {
      // title: "Vue ninjas",
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    };
  },
  methods: {
    updateTitle(newTitle) {
      this.title = newTitle;
    }
  }
};
</script>

<style scoped>
</style>
