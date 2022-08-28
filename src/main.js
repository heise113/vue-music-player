import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store";
import router from "@/router"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
