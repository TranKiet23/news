<template>
 <div class="mx-auto">
    <!-- Main Content -->
        <nav class="text-sm ml-3 mb-4">
          <a href="#" class="text-red-500">Home</a> / <a href="#" class="text-red-500">Category</a> / <a href="#"
            class="text-red-500">Technology</a> / <span class="text-gray-600">News Title</span>
        </nav>
        <section>
    <div class="w-full">
      <div class="content-page">
        <ImageCarousel :imagesToShow="3" />
      </div>
      <div class="w-full category">
        <div class="w-full flex justify-between p-1 items-center">
          <div class="w-8/12">
            <Carousel />
          </div>
          <!-- catogory -->
          <div class="w-4/12">
            <div class="w-full bg-white flex justify-between py-3 my-2">
              <div class="pl-2">
                <span class="text-xl text-black font-semibold">
                  Categories
                </span>
              </div>
              <div class="pr-3">
                <span class="text-base text-gray-300 font-light">View All</span>
              </div>
            </div>
            <div class="w-full">
              <div class="image-container" v-for="item, i in images">
                <img class="image-container" :src="item.url" :alt="item.url">
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
        <div class="sub-title">
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
  <section class="px-2">
    <div class="w-full flex flex-row flex-nowrap">
      <div class="bussines w-1/2">
        <CarouseBussines title="Bussines" :cards="cardArray" :cardsToShow="2" />
      </div>
      <div class="bussines w-1/2">
        <CarouseBussines title="Technology" :cards="cardArray" :cardsToShow="2" />
      </div>
    </div>
    <div class="w-full flex flex-row flex-nowrap">
      <div class="bussines w-1/2">
        <CarouseBussines title="Entertaiment" :cards="cardArray" :cardsToShow="2" />
      </div>
      <div class="bussines w-1/2">
        <CarouseBussines title="Sport" :cards="cardArray" :cardsToShow="2" />
      </div>
    </div>
  </section>

  <!-- Popular Section -->
  <section>
    <div class="p-5">
      <div class="mx-auto w-full flex">
        <!-- Popular Section -->
        <div class="w-2/3 px-1">
          <div class="flex justify-between items-center mb-4 bg-white">
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
        <div class="w-1/3 px-2">
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
    <div class="mx-auto py-3 p-5 flex">
        <!-- Latest Section -->
        <div class="w-2/3 px-2">
          <div class="flex justify-between items-center mb-4 bg-white">
            <h2 class="text-2xl font-bold text-black pl-2">Latest</h2>
            <a href="#" class="text-gray-600 pr-2">View All</a>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <!-- News Item 1 -->
            <div class="col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://placehold.co/400x250" alt="Image of a meeting" class="w-full h-52 object-cover">
                <div class="p-4">
                    <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01, 2045</span>
                    <h3 class="text-xl font-bold mt-2">Est stet amet ipsum stet clita rebun duo</h3>
                    <p class="text-gray-600 mt-2">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...</p>
                </div>
            </div>
            <!-- News Item 2 -->
            <div class="col-span-1 bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://placehold.co/400x250" alt="Image of a woman running" class="w-full h-52 object-cover">
                <div class="p-4">
                    <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01, 2045</span>
                    <h3 class="text-xl font-bold mt-2">Est stet amet ipsum stet clita rebun duo</h3>
                    <p class="text-gray-600 mt-2">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...</p>
                </div>
            </div>
            <!-- News Item 3 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://placehold.co/200x150" alt="Image of a man in a suit" class="w-full h-32 object-cover">
                <div class="p-4">
                    <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01, 2045</span>
                    <h3 class="text-lg font-bold mt-2">Lorem ipsum dolor sit amet consec adipis elit</h3>
                </div>
            </div>
            <!-- News Item 4 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://placehold.co/200x150" alt="Image of people in a meeting" class="w-full h-32 object-cover">
                <div class="p-4">
                    <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01, 2045</span>
                    <h3 class="text-lg font-bold mt-2">Lorem ipsum dolor sit amet consec adipis elit</h3>
                </div>
            </div>
            <!-- News Item 5 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://placehold.co/200x150" alt="Image of a person using a smartphone" class="w-full h-32 object-cover">
                <div class="p-4">
                    <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01, 2045</span>
                    <h3 class="text-lg font-bold mt-2">Lorem ipsum dolor sit amet consec adipis elit</h3>
                </div>
            </div>
            <!-- News Item 6 -->
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://placehold.co/200x150" alt="Image of gadgets" class="w-full h-32 object-cover">
                <div class="p-4">
                    <span class="text-red-500 font-semibold">Technology</span> / <span class="text-gray-600">January 01, 2045</span>
                    <h3 class="text-lg font-bold mt-2">Lorem ipsum dolor sit amet consec adipis elit</h3>
                </div>
            </div>
        </div>
      </div>
      <div class="w-1/3 ml-1">
        <div class="max-w-md mx-auto rounded bg-white p-4 shadow-md">
        <h2 class="text-xl font-bold mb-4">Tags</h2>
          <div class="grid grid-cols-3 gap-2" >
              <button class="border border-gray-300 rounded px-4 py-2" v-for="item, index in buttonList" :key="index">{{ item }}</button>
              <!-- <button class="border border-gray-300 rounded px-4 py-2">Business</button>
              <button class="border border-gray-300 rounded px-4 py-2">Corporate</button>
              <button class="border border-gray-300 rounded px-4 py-2">Sports</button>
              <button class="border border-gray-300 rounded px-4 py-2">Health</button>
              <button class="border border-gray-300 rounded px-4 py-2">Education</button>
              <button class="border border-gray-300 rounded px-4 py-2">Science</button>
              <button class="border border-gray-300 rounded px-4 py-2">Technology</button>
              <button class="border border-gray-300 rounded px-4 py-2">Foods</button>
              <button class="border border-gray-300 rounded px-4 py-2">Entertainment</button>
              <button class="border border-gray-300 rounded px-4 py-2">Travel</button>
              <button class="border border-gray-300 rounded px-4 py-2">Lifestyle</button> -->
          </div>
        </div>
      </div>
    
  </div>
       
  </section>
      </div>

</template>
<script>
import Carousel from '../home-page/components/CarouselContent.vue';
import ImageCarousel from '../../components/ImageCarousel.vue';
import CarouseBussines from '../home-page/components/CarouseBussines.vue';
import API from '@/services/api';
import { ref } from 'vue';

export default {
  components: {  Carousel, ImageCarousel },
  setup() {
    return {
      images: ref(API.categories),
      cardArray: ref(API.cardArray),
      buttonList: ref(API.buttonList)
    }
  },
}



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

}</style>
