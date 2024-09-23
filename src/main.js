import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin, faInstagram, faFacebook, faReact, faVuejs, faFlutter, faHtml5, faJs, faLaravel, faCss3, faGithub } from '@fortawesome/free-brands-svg-icons'

import {  faStar ,faListUl, faGraduationCap, faGlobe,  faCloud, faC, faCrown, faCode} from "@fortawesome/free-solid-svg-icons";
import {faGrinBeam} from "@fortawesome/free-regular-svg-icons"
/* add icons to the library */
library.add(faLinkedin, faGithub, faStar, faCode, faInstagram, faFacebook,  faListUl,  faGraduationCap, faGlobe, faGrinBeam, faReact, faVuejs, faFlutter, faHtml5, faJs, faLaravel, faCloud, faC, faCss3, faCrown)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')