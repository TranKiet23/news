<template>
    <footer>
        <div class="mx-auto px-6 py-8 bg-white md:flex w-full">
      <!-- Header Section -->
      <div class="text-center md:text-left mb-8 w-full md:w-1/4">
        <div class="text-ms md:text-xl font-bold text-red-600">
          NEWS<span class="text-gray-800">ROOM</span>
        </div>
        <p class="mt-2 text-gray-600">Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
        <div class="flex justify-center md:justify-start space-x-4 mt-4">
                    <img src="../assets/imgs/youtube.svg" alt="fb" class="w-4 h-4">
                      <img src="../assets/imgs/fb.svg" alt="fb" class="w-4 h-4">
                      <img src="../assets/imgs/instagram.svg" alt="fb" class="w-4 h-4">
                      <img src="../assets/imgs/twitter.svg" alt="fb" class="w-4 h-4">

        </div>
      </div>
  
      <section class="mb-8 w-full md:w-1/4">
        <h2 class="text-ms md:text-xl font-semibold text-gray-800 mb-4">Categories</h2>
        <div class="flex flex-wrap -m-1">
          <div v-for="category in categories" :key="category" class="m-1 px-2 py-1 border border-gray-300 text-gray-600 rounded">
            {{ category }}
          </div>
        </div>
      </section>
  
      <section class="mb-8 w-full md:w-1/4">
        <h2 class="text-ms md:text-xl font-semibold text-gray-800 mb-4">Tags</h2>
        <div class="flex flex-wrap -m-1">
          <div v-for="tag in tags" :key="tag" class="m-1 px-2 py-1 border border-gray-300 text-gray-600 rounded">
            {{ tag }}
          </div>
        </div>
      </section>
  
      <section class="w-full md:w-1/4 pl-2">
        <h2 class="text-ms md:text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
        <ul class="list-disc list-inside text-gray-600">
          <li v-for="link in quickLinks" :key="link">{{ link }}</li>
        </ul>
      </section>
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
  
      return {
        categories,
        tags,
        quickLinks
      };
    }
  };
  </script>
  