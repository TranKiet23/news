<template>
    <footer>
      <div class="mx-auto px-6 py-8 bg-white md:flex w-full">
      <!-- Header Section -->
      <div class="text-center md:text-left mb-8 w-full md:px-2 md:w-1/4">
        <div class="text-ms md:text-xl font-bold text-red-600">
          NEWS<span class="text-gray-800">ROOM</span>
        </div>
        <p class="mt-2 text-gray-600">Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
        <div class="flex justify-center md:justify-start space-x-4 mt-4">
          <span class="border border-gray-300 p-1 rounded">
            <img src="../assets/imgs/youtube.svg" alt="fb" class="w-4 h-4">
          </span>     
          <span class="border border-gray-300 p-1 rounded">
            <img src="../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">
          </span>
          <span class="border border-gray-300 p-1 rounded">
            <img src="../assets/imgs/instagram.svg" alt="fb" class="w-4 h-4">
          </span>
          <span class="border border-gray-300 p-1 rounded">
            <img src="../assets/imgs/twitter.svg" alt="fb" class="w-4 h-4">
          </span>
                     

        </div>
      </div>
  
      <section class="mb-8 w-full md:px-2 md:w-1/4">
        <h2 class="text-ms md:text-xl font-semibold text-gray-800 mb-4">Categories</h2>
        <div class="flex flex-wrap -m-1">
          <div v-for="category in categories" :key="category" class="m-1 px-2 py-1 border border-gray-300 text-gray-600 rounded">
            {{ category }}
          </div>
        </div>
      </section>
  
      <section class="mb-8 w-full md:px-2 md:w-1/4">
        <h2 class="text-ms md:text-xl font-semibold text-gray-800 mb-4">Tags</h2>
        <div class="flex flex-wrap -m-1">
          <div v-for="tag in tags" :key="tag" class="m-1 px-2 py-1 border border-gray-300 text-gray-600 rounded">
            {{ tag }}
          </div>
        </div>
      </section>
  
      <section class="w-full md:w-1/4 md:pl-1 pl-2">
        <h2 class="text-ms md:text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
        <ul class="list-inside text-gray-600">
          <li v-for="link in quickLinks" :key="link"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mr-2 fs-icon"></font-awesome-icon>{{ link }}</li>
        </ul>
      </section>
      </div>
      <div class="mx-auto px-6 w-full bg-gray-200 h-24">
        <div class="text-center py-6 text-base md:text-sm text-gray-700">
          <p>© <span class="text-red-600">Your Site Name.</span> All Rights Reserved. Designed by <span class="text-red-600">HTML Codex</span></p>

        </div>
        <div class="fixed bottom-4 right-4">
          <button class="bg-gray-800 text-white px-2 py-1 rounded" @click="goToTop">
           <span class="fs-13">&#11165;</span>
          </button>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const categories = ref([
        'Politics', 'Business', 'Corporate', 'Sports', 'Health', 'Education',
        'Science', 'Technology', 'Foods', 'Entertainment', 'Travel', 'Lifestyle'
      ]);
  
      const tags = ref([
        'Politics', 'Business', 'Corporate', 'Sports', 'Health', 'Education',
        'Science', 'Technology', 'Foods', 'Entertainment', 'Travel', 'Lifestyle'
      ]);
  
      const quickLinks = ref([
        'Home', 'Categories', 'Single News', 'Dropdown', 'Contact'
      ]);

      const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
      }
  
      return {
        categories,
        tags,
        quickLinks,
        goToTop
      };
    }
  };
</script>

<style lang="scss">
.fs-icon {
  font-size: 10px;
  @media (max-width: 768px) {
    font-size: 8px;
  }
}
</style>
  