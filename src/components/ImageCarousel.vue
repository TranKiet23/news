<template>
    <div class="carousel">
    <button class="border absolute z-10 mr-[10px] p-2 border-gray-400 transparent cursor-pointer" @click="prevImage">
        <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-700" />
    </button>
    <div class="carousel-images">
      <div class="image-wrapper" v-for="(image, index) in visibleImages" :key="index">
        <div class="card-image-container" :class="{'card-image-full':containContent}">
            <img :src="image.url" :alt="image.url" class="img-content" :style="image.className">
          </div>
          <div class="card-content">
            <p>{{ image.title }}</p>
          </div>
      </div>
    </div>
    <button  @click="nextImage" class="border absolute z-10 p-2 right-12  border-gray-400 transparent cursor-pointer" >
        <font-awesome-icon :icon="['fas', 'angle-right']" class="text-gray-700" />
    </button>
  </div>
  </template>
  
  <script>
  import {ref} from "Vue"
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
    const currentIndex= ref(0);
    const images = ref(API.imagesList);
    return {
        currentIndex,
        images,
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
    }
  },
  created(){
    console.log(this.imagesToShow);
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

<style lang="scss">
.carousel {
  display: flex;
  align-items: center;
  padding: 6px;
}

.carousel-images {
    display: grid;
      width: 80%;
      grid-template-columns: auto auto auto auto;
      gap: 20px; 
      padding: 20px;
      align-items: center;
      transform: translate(-20px,-10px);
    width: 1280px; /* Adjust as needed */
}

.image-wrapper {
        border: 1px solid #ddd;
        border-radius: 3px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        @apply bg-white flex flex-row
}


.card-image-container {
    img {
    width: 100px;
    height: 100px;
    object-fit: cover; 
    }
}
.card-image-full {
    img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    }
}

.card-content {
    padding: 10px; 
    text-align: left;
    display: flex;
    align-items: center;

    }

    p {
    margin: 0;
    font-size: 13px;
    color: #666;
    padding-left: 2px; 
    @media (max-width: 1024px) {
        font-size: 10px;

    }
}
</style>