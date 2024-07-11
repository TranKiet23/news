import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import _ from 'lodash'
import qs from 'qs'
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faRightLeft, faAngleRight, faAngleLeft, faAngleDown  } from "@fortawesome/free-solid-svg-icons";
import { faUser,  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from './services/router';
// Import specific icons
library.add(faUser, faRightLeft, faAngleRight, faAngleLeft, faAngleDown);


window._ = _;
window.qs = qs;
createApp(App).use(Antd).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')