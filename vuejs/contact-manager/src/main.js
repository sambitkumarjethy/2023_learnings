import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "store";

/* Font Assome icon*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/* Bootstrap css,Js */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./style.css"; // main css file

createApp(App).use(router).use(store).mount("#app");
