<template>
  <div class="mx-auto px-6 py-8">
    <div :class="gridClass">
      <button class="border absolute bg-button absolute z-10 mr-[10px] mt-2 md:mt-8 p-2 border-gray-400 bg-blue-200 hover:bg-gray-300 transparent cursor-pointer" @click="prevImage">
        <font-awesome-icon :icon="['fas', 'angle-left']" class="text-white" />
      </button>
      <div class="flex bg-white rounded-lg shadow-md overflow-hidden" v-for="(image, index) in visibleImages"
        :key="index">
        <img :src="image.url" :alt="image.url" class="w-1/3 object-cover">
        <div class="w-2/3 p-4">
          <h3 class="text-gray-800 font-semibold">{{ image.sub }}</h3>
          <p class="text-gray-600">{{ image.title }}</p>
        </div>
      </div>
      <button @click="nextImage" class="border absolute bg-button z-10 p-2 right-5 mt-2 md:mt-8  border-gray-400 transparent cursor-pointer bg-blue-200 hover:bg-gray-300">
        <font-awesome-icon :icon="['fas', 'angle-right']" class="text-white" />
      </button>
    </div>

  </div>
</template>
  
<script>
import { ref } from "vue"
import API from "@/services/api";
export default {
  props: {
    imagesToShow: {
      type: Number,
      default: 3
    },
    containContent: {
      type: Boolean,
      default: false
    },
  },
  setup() {
    const currentIndex = ref(0);
    const images = ref(API.imagesList);
    const currentShow = ref(0)

    return {
      currentIndex,
      images,
      currentShow
      
    }
  },
  computed: {
    visibleImages() {
      let start = this.currentIndex;
      let end = start + this.imagesToShow;
      if (end > this.images.length) {
        end = this.images.length;
      }
      return this.images.slice(start, end);
    },
    gridClass () {
      return this.currentShow > 1 ? `grid grid-cols-1 md:grid-cols-${this.imagesToShow} gap-5` : 'grid grid-cols-1 gap-4';
    }
  },
  created()
  {
    this.currentShow = this.imagesToShow;

  },
  mounted(){
    window.addEventListener('resize', this.checkScreenWidth);
  },
  unmounted(){
    window.removeEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth () {
      let value = window.innerWidth > 768 ? this.imagesToShow : 1;
      this.currentShow = value;
    },
   
    nextImage() {
      if (this.currentIndex < this.images.length - 3) {
        this.currentIndex += 1;
      }
    },
    prevImage() {

      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    }
  }
};
</script>

<style lang="scss">
 .bg-button {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
