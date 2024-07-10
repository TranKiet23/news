<template>
  <div class="carousel justify-center pl-4 pt-3 md:pl-0 md:pt-0">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item rounded" v-for="(image, index) in images" :key="index">
        <img :src="image.url" :alt="'Image ' + index" class="w-full h-64 md:h-96 object-cover">
        <div class="title absolute bottom-12 left-0 w-full text-center p-4 bg-black bg-opacity-50">
          <p class="text-white text-sm md:text-lg">Thurday / 2024</p>
          <span class="text-white text-lg md:text-2xl font-semibold">
            {{image.title}}
          </span>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" @click="prevSlide">‹</button>
    <button class="carousel-control-next" @click="nextSlide">›</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import API from '@/services/api';

export default {
  setup() {
    const images = ref(API.contentList);
    const currentIndex = ref(0);

    const nextSlide = () => {
      if (currentIndex.value < images.value.length - 1) {
        currentIndex.value += 1;
      } else {
        currentIndex.value = 0;
      }
    };

    const prevSlide = () => {
      if (currentIndex.value > 0) {
        currentIndex.value -= 1;
      } else {
        currentIndex.value = images.value.length - 1;
      }
    };

    return {
      images,
      currentIndex,
      nextSlide,
      prevSlide
    };
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel img {
  width: 100%;
  display: block;
}

.title {
  position: absolute;
  width: 100%;
  bottom: 50px;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}
</style>