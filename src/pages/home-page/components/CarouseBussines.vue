<template>
  <div class="mx-auto px-6 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5" :class="{ 'md:grid-cols-4': imagesToShow === 4 }">
      <button class="border absolute z-10 mr-[10px] p-2 border-gray-400 transparent cursor-pointer" @click="prevImage">
        <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-700" />
      </button>
      <div class="flex bg-white rounded-lg shadow-md overflow-hidden" v-for="(image, index) in visibleImages"
        :key="index">
        <img :src="image.url" :alt="image.url" class="w-1/3 object-cover">
        <div class="w-2/3 p-4">
          <h3 class="text-gray-800 font-semibold">Lorem ipsum dolor sit amet</h3>
          <p class="text-gray-600">{{ image.title }}</p>
        </div>
      </div>
      <button @click="nextImage" class="border absolute z-10 p-2 right-6  border-gray-400 transparent cursor-pointer">
        <font-awesome-icon :icon="['fas', 'angle-right']" class="text-gray-700" />
      </button>
    </div>

  </div>
</template>
  
<script>
import { ref } from "vue"
import API from "@/services/api";
export default {

  setup() {
    const currentIndex = ref(0);
    const images = ref(API.imagesList);
    return {
      currentIndex,
      images,
    }
  },
  computed: {
    visibleImages() {
      let start = this.currentIndex;
      let end = start + 1;
      if (end > this.images.length) {
        end = this.images.length;
      }
      return this.images.slice(start, end);
    }
  },

  methods: {
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

<style lang="scss"></style>