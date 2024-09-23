import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin, faInstagram, faFacebook, faReact, faVuejs, faFlutter, faHtml5, faJs, faLaravel, faCss3 } from '@fortawesome/free-brands-svg-icons'

import { faAddressCard, faStar ,faListUl, faToolbox, faGraduationCap, faGlobe,  faUsers, faCloud, faC, faCrown, faCode} from "@fortawesome/free-solid-svg-icons";
import {faGrinBeam} from "@fortawesome/free-regular-svg-icons"
/* add icons to the library */
library.add(faLinkedin, faStar, faCode, faInstagram, faFacebook, faAddressCard, faListUl, faToolbox, faGraduationCap, faGlobe, faGrinBeam, faUsers, faReact, faVuejs, faFlutter, faHtml5, faJs, faLaravel, faCloud, faC, faCss3, faCrown)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')