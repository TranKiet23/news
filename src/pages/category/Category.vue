<template>
  <div class="mx-auto">
    <!-- Main Content -->
    <nav class="text-sm ml-3 mb-2 bg-slate-100 w-max md:p-2 rounded-sm  text-gray-400">
      <a href="#" class="text-red-500">Home</a> / <a href="#" class="text-red-500">Category</a>
      / <span class="text-gray-600">Technology</span>
    </nav>

    <!-- list -->
    <section>
      <div class="mx-auto xl:w-full p-5 mr-2 md:mr-0 md:p-3 w-full flex xl:flex-row flex-col ">
        <!-- Technology -->
        <div class="md:w-2/3 w-full px-2 pb-4">
          <div class="flex justify-between items-center mb-4 bg-white rounded">
            <h2 class="text-2xl font-bold text-black pl-2">Technology</h2>
            <a href="#" class="text-gray-600 pr-2">View All</a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded shadow" v-for="item, i in trendings" :key="i" >
              <img :src="item.url" alt="Headphones and a smartphone on a table"
                class="w-full h-48 object-cover rounded">
              <div class="mt-4">
                <span class="text-red-500">{{ item.title }}</span> / <span>{{ item.date }}</span>
                <h3 class="mt-2 text-gray-500 font-bold text-xl">Est stet amet ipsum stet clita rebum duo</h3>
                <p class="mt-2 text-gray-800">{{ item.des }}</p>
              </div>
            </div>
          
          </div>
          <div class="py-4 md:p1-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex bg-white p-4 rounded shadow" v-for="news, index in paginatedItems" :key="index">
              <img :src="news.image" :alt="news.images"
                class="w-24 h-24 object-cover rounded">
              <div class="ml-4">
                <span class="text-red-500">{{ news.category }}</span> / <span class="text-gray-400">{{ news.date }}</span>
                <h3 class="mt-2 text-gray-700 font-bold">{{ news.title }}</h3>
                <span class="text-gray-500">{{ news.description }}</span>
              </div>
            </div>
           
          </div>
        </div>
          <!-- Pagination -->
          <pagination :total="newsList.length" :page-size="pageSize" v-model:currentPage="currentPage"></pagination>
        </div>
        <div class="md:w-1/3 w-full  ml-1 py-3">
            <div class="mt-[-10px]">
              <!-- Follow Us -->
              <div class="shadow-md bg-white rounded-lg p-4 mb-4">
                <h3 class=" text-black text-xl font-bold mb-4">Follow Us</h3>
                <ul class="grid grid-rows-3 grid-flow-col gap-4">
                  <li class="flex items-center space-x-2 bg-blue-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">
                    <a href="#" class="text-gray-600">12,345 Fans</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-red-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/youtube.svg" alt="fb" class="w-4 h-4">
                    <a href="#" class="text-gray-600">12,345 Followers</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-orange-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/instagram.svg" alt="fb" class="w-4 h-4">
                    <a href="#" class="text-gray-600">12,345 Connects</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-blue-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">

                    <a href="#" class="text-gray-600">12,345 Followers</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-red-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/youtube.svg" alt="fb" class="w-4 h-4">

                    <a href="#" class="text-gray-600">12,345 Subscribers</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-orange-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/instagram.svg" alt="fb" class="w-4 h-4">

                    <a href="#" class="text-gray-600">12,345 Subscribers</a>
                  </li>
                </ul>
              </div>
              <!-- Newsletter -->
              <div class="bg-white shadow-md w-full rounded-lg p-4">
                <h3 class="text-xl font-bold mb-4 text-black">Newsletter</h3>
                <p class="text-gray-600 mb-4">Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                <form class="flex">
                  <input type="email" placeholder="Your Email" class="border border-gray-300 p-2 rounded-l-lg flex-grow">
                  <button type="submit" class="bg-red-500 text-white p-2 rounded-r-lg">Sign Up</button>
                </form>
              </div>
            </div>

          <!-- Trending -->
          <div class="mx-auto py-2 mt[-18px] w-full">
            <div class="pb-2 pt-1">
            <img src="https://placehold.co/400x250" alt="Description of the image" class="w-full h-32 object-cover rounded">
          </div>
            <div class="bg-white rounded shadow-md p-2">
              
              <h2 class="text-xl font-semibold text-gray-800 mb-4">Trending</h2>
              <div class="space-y-4">
                <div class="flex" v-for="trend, i in trendings" :key="i">
                  <img :src="trend.url" alt="Image" class="w-20 h-20 object-cover rounded-md">
                  <div class="ml-4">
                    <p class="text-sm text-red-600 font-bold">{{ trend.title }} / {{ trend.date }}</p>
                    <h3 class="text-gray-800 font-semibold">{{ trend.des }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- tag -->
          <div class="md:max-w-md mx-auto rounded mt-1 md:mt-2 w-full bg-white p-4  shadow-md">
            <h2 class="text-xl font-bold mb-4 text-black">Tags</h2>
            <div class="grid grid-cols-3 gap-2">
              <button class="border border-gray-300 rounded px-4 py-2" v-for="item, index in buttonList" :key="index">{{
                item.value }}</button>

            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<script>
import CarouselContent from '../home-page/components/CarouselContent.vue';
import ImageCarousel from '../../components/ImageCarousel.vue';
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import API from '@/services/api';
import Pagination from '@/components/Pagination.vue';
export default {
  components: { CarouselContent, ImageCarousel, Pagination },
  setup() {
    const images = ref([]);
    const buttonList = ref([]);
    const error = ref(null);
    const store = useStore();
    const trendings = ref(API.bestSeller);
    const newsList = ref(API.newsList);
    const currentPage = ref(1);
    const pageSize = ref(6);

    const paginatedItems = computed(() => {
            store.dispatch('load', 'tag')
            const start = (currentPage.value - 1) * pageSize.value;
            const end = start + pageSize.value;
            store.dispatch('unload', 'tag')
            return newsList.value.slice(start, end);
        });
    const fetchData = async () => {
      store.dispatch('load', 'tag')
      try {
        const response = await axios.get('https://668f5e0680b313ba0917d941.mockapi.io/api/v1/news/tags');
        buttonList.value = response.data;
        store.dispatch('unload', 'tag')

      } catch (err) {
        error.value = err.message;
        store.dispatch('unload', 'tag')

      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      images,
      buttonList,
      trendings,
      error,
      newsList,
      paginatedItems,
      pageSize,
      currentPage
    };
  },
};
</script>


<style lang="scss">


</style>
