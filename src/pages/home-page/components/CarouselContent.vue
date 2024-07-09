<template>
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image.url" :alt="'Image ' + index" :style="image.className">
          <div class="title">
            <p>Thurday / 2024</p>
            <span class="">
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
        const images = ref(API.contentList)
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
    width: 90%;
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
  .title{
    position: absolute;
    width: 100%;
    bottom: 50px;
    @apply z-10;
    p {
        color: #fff;
        font-size:20px;  
    }
    span {
        color: #fff;
        font-size:30px;
        font-weight: 600
    }
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