import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {

    //makes a language variable and sets it to the to
    let language = to.params.languagecode;

    //checks if language is falsy and if yes sets the default language to "en"
    if (!language) {
        language = "en";
    }

    //changes the i18n locale that means the language
    //then calls next to continue
    i18n.locale = language;
    next();
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
