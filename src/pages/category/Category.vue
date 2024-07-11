<template>
  <div class="mx-auto">
    <!-- Main Content -->
    <nav class="text-sm ml-3 mb-2">
      <a href="#" class="text-red-500">Home</a> / <a href="#" class="text-red-500">Category</a> 
    </nav>
    <section>
      <div class="mx-auto w-full ml-1 md:ml-4">
      <div class="content-page">
        <ImageCarousel :imagesToShow="3" class="display-mb" />
      </div>
      <div class="w-full mx-auto">
        <div class="w-full md:flex md:justify-between p-1 items-center">
          <div class="md:w-8/12 w-full">
            <div>
              <CarouselContent />
            </div>
          </div>
          <div class="md:w-4/12 w-full">
            <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
              <div class="p-4 border-b flex flex-row justify-between w-full">
                <h2 class="text-xl font-semibold text-gray-800">Categories</h2>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-800">View All</a>
              </div>
              <div>
                <a href="#" class="block relative" v-for="item, i in images" :key="i">
                  <img :src="item.url" alt="Business" class="w-full h-16 md:h-20 object-cover">
                  <span class="absolute inset-0 bg-black opacity-50"></span>
                  <span
                    class="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm md:text-lg">
                    {{ item.title }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Featured -->
  <section>
    <div class="w-full">
      <div class="featured">
        <div class="sub-title rounded-lg">
          <h2>
            Featured
          </h2>
          <span>
            View All
          </span>
        </div>
        <div class="featured-content">
          <ImageCarousel :imagesToShow="4" :containContent="false" />
        </div>
      </div>
    </div>
  </section>
  <!-- bussines && sport -->
  <section>
    <div class="mx-auto px-3 py-8">
      <div class="w-full flex gap-8 md:flex-row flex-col">
        <!-- Section: Business -->
        <div class="w-full md:w-1/2">
          <div class="flex justify-between items-center mb-4">
            <div class="w-full bg-white flex justify-between items-center rounded">
              <h2 class="text-2xl pl-1 font-bold text-black">Business</h2>
              <div class="pr-1">
                <button class="p-2 mx-1 bg-slate-300">
                  <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-700" /> </button>
                <button class="p-2 bg-slate-300"> <font-awesome-icon :icon="['fas', 'angle-right']"
                    class="text-gray-700" /></button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Business Image 1" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-red-500">Technology</span> / <span>January 01, 2045</span>
                <h3 class="text-xl font-bold mt-2">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Business Image 2" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-red-500">Technology</span> / <span>January 01, 2045</span>
                <h3 class="text-xl font-bold mt-2">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>

          </div>
        </div>

        <!-- Section: Technology -->
        <div class="w-full md:w-1/2">
          <div class="flex justify-between items-center mb-4">
            <div class="w-full bg-white flex justify-between items-center rounded">
              <h2 class="text-2xl pl-1 font-bold text-black">Technology</h2>
              <div class="pr-1">
                <button class="p-2 mx-1 bg-slate-300">
                  <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-700" /> </button>
                <button class="p-2 bg-slate-300"> <font-awesome-icon :icon="['fas', 'angle-right']"
                    class="text-gray-700" /></button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Business Image 1" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-red-500">Technology</span> / <span>January 01, 2045</span>
                <h3 class="text-xl font-bold mt-2">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Business Image 2" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-red-500">Technology</span> / <span>January 01, 2045</span>
                <h3 class="text-xl font-bold mt-2">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="w-full flex gap-8 md:flex-row flex-col pt-4">
        <!-- Section: Entertainment -->
        <div class="w-full md:w-1/2">
          <div class="flex justify-between items-center mb-4">
            <div class="w-full bg-white flex justify-between items-center rounded">
              <h2 class="text-2xl pl-1 font-bold text-black">Entertainment</h2>
              <div class="pr-1">
                <button class="p-2 mx-1 bg-slate-300">
                  <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-700" /> </button>
                <button class="p-2 bg-slate-300"> <font-awesome-icon :icon="['fas', 'angle-right']"
                    class="text-gray-700" /></button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Business Image 1" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-red-500">Technology</span> / <span>January 01, 2045</span>
                <h3 class="text-xl font-bold mt-2">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Business Image 2" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-red-500">Technology</span> / <span>January 01, 2045</span>
                <h3 class="text-xl font-bold mt-2">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>

          </div>
        </div>

        <!-- Section: Sport -->
        <div class="w-full md:w-1/2">
          <div class="flex justify-between items-center mb-4">
            <div class="w-full bg-white flex justify-between items-center rounded">
              <h2 class="text-2xl pl-1 font-bold text-black">Sport</h2>
              <div class="pr-1">
                <button class="p-2 mx-1 bg-slate-300">
                  <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-700" /> </button>
                <button class="p-2 bg-slate-300"> <font-awesome-icon :icon="['fas', 'angle-right']"
                    class="text-gray-700" /></button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Business Image 1" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-red-500">Technology</span> / <span>January 01, 2045</span>
                <h3 class="text-xl font-bold mt-2">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Business Image 2" class="w-full h-48 object-cover">
              <div class="p-4">
                <span class="text-red-500">Technology</span> / <span>January 01, 2045</span>
                <h3 class="text-xl font-bold mt-2">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Popular Section -->
  <section>
    <div class="p-5">
      <div class="mx-auto w-full flex md:flex-row flex-col">
        <!-- Popular Section -->
        <div class="md:w-2/3 w-full px-1">
          <div class="flex justify-between items-center mb-4 bg-white rounded">
            <h2 class="text-2xl text-black font-bold ml-2">Popular</h2>
            <a href="#" class="text-gray-600 mr-2 cur">View All</a>
          </div>
          <div class="flex space-x-4">
            <!-- News Item 1 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden w-1/2">
              <img src="https://placehold.co/400x250" alt="Image of cats" class="w-full h-52 object-cover">
              <div class="p-4">
                <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01,
                  2045</span>
                <h3 class="text-xl font-bold mt-2">Est stet amet ipsum stet clita rebun duo</h3>
                <p class="text-gray-600 mt-2">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at
                  justo, lorem amet vero eos sed sit...</p>
              </div>
            </div>
            <!-- News Item 2 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden w-1/2">
              <img src="https://placehold.co/400x250" alt="Image of kids with skateboard"
                class="w-full h-52 object-cover">
              <div class="p-4">
                <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01,
                  2045</span>
                <h3 class="text-xl font-bold mt-2">Est stet amet ipsum stet clita rebun duo</h3>
                <p class="text-gray-600 mt-2">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at
                  justo, lorem amet vero eos sed sit...</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Section -->
        <div class="md:w-1/3 w-full px-2">
          <div class="mt-8">
            <!-- Follow Us -->
            <div class="shadow-md bg-white rounded-lg p-4 mb-4">
              <h3 class=" text-black text-xl font-bold mb-4">Follow Us</h3>
              <ul class="space-y-2 bg-white">
                <li class="flex items-center space-x-2">
                  <img src="../../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">
                  <a href="#" class="text-gray-600">12,345 Fans</a>
                </li>
                <li class="flex items-center space-x-2">
                  <img src="../../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">
                  <a href="#" class="text-gray-600">12,345 Followers</a>
                </li>
                <li class="flex items-center space-x-2">
                  <img src="../../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">
                  <a href="#" class="text-gray-600">12,345 Connects</a>
                </li>
                <li class="flex items-center space-x-2">
                  <img src="../../assets/imgs/instagram.svg" alt="fb" class="w-4 h-4">

                  <a href="#" class="text-gray-600">12,345 Followers</a>
                </li>
                <li class="flex items-center space-x-2">
                  <img src="../../assets/imgs/youtube.svg" alt="fb" class="w-4 h-4">

                  <a href="#" class="text-gray-600">12,345 Subscribers</a>
                </li>
              </ul>
            </div>
            <!-- Newsletter -->
            <div class="bg-white shadow-md rounded-lg p-4">
              <h3 class="text-xl font-bold mb-4 text-black">Newsletter</h3>
              <p class="text-gray-600 mb-4">Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
              <form class="flex">
                <input type="email" placeholder="Your Email" class="border border-gray-300 p-2 rounded-l-lg flex-grow">
                <button type="submit" class="bg-red-500 text-white p-2 rounded-r-lg">Sign Up</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto w-full flex md:flex-row flex-col ">
      <!-- Latest Section -->
      <div class="md:w-2/3 w-full px-2 pb-4">
        <div class="flex justify-between items-center mb-4 bg-white rounded">
          <h2 class="text-2xl font-bold text-black pl-2">Latest</h2>
          <a href="#" class="text-gray-600 pr-2">View All</a>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <!-- News Item 1 -->
          <div class="col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://placehold.co/400x250" alt="Image of a meeting" class="w-full h-52 object-cover">
            <div class="p-4">
              <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01,
                2045</span>
              <h3 class="text-xl font-bold mt-2">Est stet amet ipsum stet clita rebun duo</h3>
              <p class="text-gray-600 mt-2">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at
                justo, lorem amet vero eos sed sit...</p>
            </div>
          </div>
          <!-- News Item 2 -->
          <div class="col-span-1 bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://placehold.co/400x250" alt="Image of a woman running" class="w-full h-52 object-cover">
            <div class="p-4">
              <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01,
                2045</span>
              <h3 class="text-xl font-bold mt-2">Est stet amet ipsum stet clita rebun duo</h3>
              <p class="text-gray-600 mt-2">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at
                justo, lorem amet vero eos sed sit...</p>
            </div>
          </div>
          <!-- News Item 3 -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://placehold.co/200x150" alt="Image of a man in a suit" class="w-full h-32 object-cover">
            <div class="p-4">
              <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01,
                2045</span>
              <h3 class="text-lg font-bold mt-2">Lorem ipsum dolor sit amet consec adipis elit</h3>
            </div>
          </div>
          <!-- News Item 4 -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://placehold.co/200x150" alt="Image of people in a meeting" class="w-full h-32 object-cover">
            <div class="p-4">
              <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01,
                2045</span>
              <h3 class="text-lg font-bold mt-2">Lorem ipsum dolor sit amet consec adipis elit</h3>
            </div>
          </div>
          <!-- News Item 5 -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://placehold.co/200x150" alt="Image of a person using a smartphone"
              class="w-full h-32 object-cover">
            <div class="p-4">
              <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01,
                2045</span>
              <h3 class="text-lg font-bold mt-2">Lorem ipsum dolor sit amet consec adipis elit</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 w-full ml-1 py-3">
        <!-- Trending -->
        <div class="mx-auto p-2 mt[-10px] w-full">
          <div class="bg-white rounded shadow-md p-2">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Trending</h2>
            <div class="space-y-4">
              <div class="flex" v-for="trend, i in trendings" :key="i">
                <img :src="trend.url" alt="Image" class="w-20 h-20 object-cover rounded-md">
                <div class="ml-4">
                  <p class="text-sm text-red-600 font-bold">{{ trend.title }}/ {{ trend.date }}</p>
                  <h3 class="text-gray-800 font-semibold">{{ trend.des }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-md mx-auto rounded w-full bg-white p-6  shadow-md">
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
import { ref, onMounted  } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
export default {
  components: { CarouselContent, ImageCarousel },
    setup() {
    const images = ref([]);
    const buttonList = ref([]);
    const error = ref(null);
    const store = useStore();

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

    const fetchCategory = async () => {
      store.dispatch('load', 'categories')
      try {
        const response = await axios.get('https://668f5e0680b313ba0917d941.mockapi.io/api/v1/news/categories');
        images.value = response.data;
          store.dispatch('unload', 'categories')
        
      } catch (err) {
        errorCate.value = err.message;
          store.dispatch('unload', 'categories')
        
      }
    };

    onMounted(() => {
      fetchData();
      fetchCategory()
    });

    return {
      images,
      buttonList,
      error,
    };
  },
};
</script>


<style lang="scss">
.category {
  position: relative;
  right: 3%;
  margin-top: -20px;
}

.image-container {
  padding-bottom: 5px;
  height: 20%;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.bussines {
  position: relative;
}

.featured {
  position: relative;
  width: 100%;


  .sub-title {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin: 5px 40px 5px 11px;
    align-items: center;
    justify-items: center;
    background-color: white;
    cursor: pointer;

    h2 {
      font-size: 20px;
      color: black;
      font-weight: 600;
      margin-left: 10px;
    }

    span {
      font-size: 18px;
      margin-right: 10px;
      @apply text-gray-400 hover:text-black
    }
  }

  .featured-content {
    width: 100%;
    margin-top: -10px;
    margin-left: 6px;
  }

}
</style>
