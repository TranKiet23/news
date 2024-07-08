import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import _ from 'lodash'
import qs from 'qs'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faBars,  faLock, faEye, faEyeSlash, faUnlockKeyhole, faKey, faTableCellsLarge, faShare, faRightFromBracket, faMagnifyingGlass, faPlusCircle, faReply, faGear, faCloudArrowUp, faCirclePlus, faDatabase,faCheck, faPrint, faArrowRotateLeft, faWrench, faTriangleExclamation, faFile, faClock, faShareNodes, faArrowsRotate, faTemperatureThreeQuarters, faRightLeft, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser, faEnvelope, faXmarkCircle, faCircleCheck, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import specific icons
library.add(faPhone, faBars, faUser, faLock, faEye, faEyeSlash, faUnlockKeyhole, faKey, faEnvelope, faTableCellsLarge, faShare, faRightFromBracket, faXmarkCircle, faMagnifyingGlass, faPlusCircle, faReply, faCircleCheck, faPenToSquare, faGear, faTrashCan, faCloudArrowUp, faCirclePlus, faDatabase,faCheck, faPrint, faArrowRotateLeft, faWrench, faTriangleExclamation, faFile, faClock, faShareNodes, faArrowsRotate, faTemperatureThreeQuarters, faRightLeft, faAngleRight, faAngleLeft);


window._ = _;
window.qs = qs;
createApp(App).use(Antd).component('font-awesome-icon', FontAwesomeIcon).mount('#app')