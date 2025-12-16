import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

const app = createApp(App)







app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router)

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000
});

app.mount('#app')
