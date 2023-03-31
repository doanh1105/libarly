/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/global.css";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import SpeedDial from "primevue/speeddial";
import FileUpload from "primevue/fileupload";
import Chart from "primevue/chart";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component("Toast", Toast);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("SpeedDial", SpeedDial);
app.component("FileUpload", FileUpload);
app.component("Chart", Chart);

app.mount("#app");
