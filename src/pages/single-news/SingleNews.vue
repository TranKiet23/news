<template>
  <div class="mx-auto p-4">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-2/3 w-full">
        <nav class="text-sm mb-3 bg-slate-100 w-max md:mb-4 rounded-sm  text-gray-400">
          <a href="#" class="text-red-500">Home</a> / <a href="#" class="text-red-500">Category</a> / <a href="#"
            class="text-red-500">Technology</a> / <span class="text-gray-600">News Title</span>
        </nav>
        <img src="https://placehold.co/800x400" alt="Image of a woman lifting weights"
          class="w-full h-64 object-cover mb-4">
        <div>
          <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01, 2045</span>
          <h1 class="text-3xl font-bold text-gray-500 mt-2">Est stet amet ipsum stet clita rebun duo</h1>
          <p class="text-gray-600 mt-4">Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
            magna lorem. Nonumy vero labore lorem eirmod kasd et magna, kasd at amet diam accusam consectetuer consetetur.
            Kasd accusam sit ipsum sadipscing et at sit sanctus est. Ipsum sit gubergren dolor est consetetur invidunt at
            ut clita amet et vero no et justo. Diam sea sea no sed dolor eos diam gubergren sit sit nonumy kasd eos.</p>
          <p class="text-gray-600 mt-4">Voluptua aliquyam takimata velit duis sed invidunt nonumy stet, clita aliquyam
            dolores vero stet consetetur est et takimata rebum sanctus. Sit sed accusam sit stet nonumy kasd diam dolores,
            sanctus lorem kasd duo dolor dolore diam sed ipsum sit duo sanctus et tempor eirmod. Consetetur sed sed et
            takimata justo. Ut est vero amet amet dolor sed dolor elit, et no et diam sit. Dolore est justo dolore et
            ipsum velit invidunt.</p>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-bold mt-4 text-gray-300">Est dolor lorem et ea</h2>
          <div class="flex flex-col md:flex-row mt-4">
            <div class="md:w-1/2 w-full">
              <img src="https://placehold.co/400x200" alt="Image of a business meeting"
                class="w-full h-32 object-cover mb-4">
            </div>
            <div class="md:w-1/2 w-full md:ml-4 text-gray-300">
              <p class="text-gray-600">Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                invidunt ut est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed
                rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem
                amet.</p>
            </div>
          </div>
          <div class="mt-4">
            <h2 class="text-2xl font-bold mt-4 text-gray-300">Est dolor lorem et ea</h2>
            <p class="text-gray-600 mt-4">Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
              invidunt ut est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed
              rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem
              amet.</p>
          </div>
        </div>
        <!-- Comments Section -->
        <div class="mt-8">
          <h2 class="text-2xl font-bold text-gray-300">3 Comments</h2>
          <Comments :commentsData="commentsData" />
          <!-- Leave a Comment -->
          <div class="mt-8">
            <h2 class="text-2xl font-bold text-gray-300">Leave a comment</h2>
            <form class="mt-4">
              <div class="flex flex-col mb-4 text-gray-500">
                <label for="name" class="mb-2">Name *</label>
                <input type="text" id="name" class="border border-gray-300 p-2 rounded">
              </div>
              <div class="flex flex-col mb-4 text-gray-500">
                <label for="email" class="mb-2">Email *</label>
                <input type="email" id="email" class="border border-gray-300 p-2 rounded">
              </div>
              <div class="flex flex-col mb-4 text-gray-500">
                <label for="website" class="mb-2">Website</label>
                <input type="url" id="website" class="border border-gray-300 p-2 rounded">
              </div>
              <div class="flex flex-col mb-4 text-gray-500">
                <label for="message" class="mb-2">Message *</label>
                <textarea id="message" class="border border-gray-300 p-2 rounded"></textarea>
              </div>
              <button type="submit" class="bg-red-500 text-white p-2 rounded">Leave a comment</button>
            </form>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 w-full md:ml-8 mt-1 md:mt-8">
        <!-- Follow Us -->
        <div class="shadow-md bg-white rounded-lg p-4 mb-4">
                <h3 class=" text-black text-xl font-bold mb-4">Follow Us</h3>
                <ul class="grid grid-rows-3 grid-flow-col gap-4">
                  <li class="flex items-center space-x-2 bg-blue-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">
                    <a href="#" class="text-gray-600">12,345 Fans</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-orange-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/instagram.svg" alt="fb" class="w-4 h-4">
                    <a href="#" class="text-gray-600">12,345 Followers</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-blue-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">
                    <a href="#" class="text-gray-600">12,345 Connects</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-blue-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/instagram.svg" alt="fb" class="w-4 h-4">

                    <a href="#" class="text-gray-600">12,345 Followers</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-red-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/youtube.svg" alt="fb" class="w-4 h-4">

                    <a href="#" class="text-gray-600">12,345 Subscribers</a>
                  </li>
                  <li class="flex items-center space-x-2 bg-red-300 p-2 rounded-sm">
                    <img src="../../assets/imgs/youtube.svg" alt="fb" class="w-4 h-4">

                    <a href="#" class="text-gray-600">12,345 Subscribers</a>
                  </li>
                </ul>
              </div>
      <!-- Newsletter -->
      <div class="bg-white shadow-md rounded-lg mr-1 p-4">
        <h3 class="text-xl font-bold mb-4 text-black">Newsletter</h3>
        <p class="text-gray-600 mb-4">Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
        <form class="flex">
          <input type="email" placeholder="Your Email" class="border border-gray-300 p-2 rounded-l-lg flex-grow">
          <button type="submit" class="bg-red-500 text-white p-2 rounded-r-lg">Sign Up</button>
        </form>
    </div>
     <!-- Trending -->
     <div class="mx-auto mt-[10px] w-full">
            <div class="pb-2 pt-1 pr-1">
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
  </div>
</template>
  
<script>
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import API from '@/services/api';
import Comments from "./components/Comments.vue"
export default {
  components: {Comments},
  setup() {
    const buttonList = ref([]);
    const errorTag = ref(null);
    const store = useStore();
    const trendings = ref(API.bestSeller);
    const commentsData = [
    {
        id: 1,
        name: "John Doe",
        date: "Jan 01, 2045 at 12:00pm",
        content: "Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren elitr aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.",
        image: "https://placehold.co/100x100"
    },
    {
        id: 2,
        name: "John Doe",
        date: "Jan 01, 2045 at 12:00pm",
        content: "Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren elitr aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.",
        image: "https://placehold.co/100x100"
    },
    {
        id: 3,
        name: "John Doe",
        date: "Jan 01, 2045 at 12:00pm",
        content: "Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren elitr aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.",
        image: "https://placehold.co/100x100"
    }
];

    const fetchTag = async () => {
      store.dispatch('load', 'tag')
      try {
        const response = await axios.get('https://668f5e0680b313ba0917d941.mockapi.io/api/v1/news/tags');
        buttonList.value = response.data;
        store.dispatch('unload', 'tag')
      } catch (err) {
        errorTag.value = err.message;
        store.dispatch('unload', 'tag')
      }
    };

    onMounted(() => {
      fetchTag();
    });

    return {
      buttonList,
      errorTag,
      trendings,
      commentsData
    };
  },
};
</script>