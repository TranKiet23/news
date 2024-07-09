import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/home-page/HomePage.vue';
import Category from '../pages/category/Category.vue';

import SingleNews from '../pages/single-news/SingleNews.vue';

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/category', component: Category, name: 'Category' },
  { path: '/single-new', component: SingleNews, name: 'SingleNew' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;