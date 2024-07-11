<template>
  <div>
    <!-- Header Section -->
    <div class="w-full bg-f5f5f5  flex justify-between items-center">
      <div class="flex justify-start items-center">
        <button type="button" class="border-red mx-8 py-2 px-4 bg-red-500 cursor-pointer">
          <span class="text-white text-xl">Tranding</span>
        </button>
        <div class="group-content-header text-center">
          <div class="flex items-center">
            <div class="border p-2 mx-3 border-gray-200 bg-f5f5f5 cursor-pointer">
              <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-300" />
            </div>
            <div class="border p-2 text-center mx-2 border-gray-200 bg-f5f5f5 cursor-pointer">
              <font-awesome-icon :icon="['fas', 'angle-right']" class="text-gray-300" />
            </div>
            <div class="content ml-3 display-mb">
              <span class="fs-13 text-gray-500">Labore sit justo amet eos sed, ety sanctus dolor diam eos</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right-header mr-2">
        <div class="text-gray-600">Monday, January 01, 2045</div>
      </div>
    </div>
    <header class="bg-white shadow">
      <div class="mx-auto px-6 py-3 flex justify-between items-center">
        <div class="text-2xl font-bold text-red-600">
          NEWS<span class="text-gray-800">ROOM</span>
        </div>

        <div class="block sm:hidden">
          <button @click="toggleMenu" class="text-gray-600 text-3xl focus:outline-none">&#9776;</button>
        </div>
        <nav class="hidden sm:flex sm:items-center space-x-6 cursor-pointer">
              <router-link class="text-gray-700 hover:text-red-300"
                :class="{ 'bg-red-500 p-1 text-white': $route.name === 'HomePage' }" :to="'/'">Home</router-link>
              <router-link class="text-gray-700 hover:text-red-300"
                :class="{ 'bg-red-500 p-1 text-white': $route.name === 'Category' }"
                :to="'/category'">Categories</router-link>
              <router-link class="text-gray-700 hover:text-red-300"
                :class="{ 'bg-red-500 p-1 text-white': $route.name === 'SingleNew' }" :to="'/single-new'">Single
                News</router-link>
              <a class="mr-2">
                <div
                  class="flex h-30 cursor-pointer align-middle no-underline hover:text-gray-900 border-white justify-center items-center dropdown-hard">
                  <span class="text-gray-500">
                    Dropdown
                    <font-awesome-icon :icon="['fas', 'angle-down']" class="fs-13 text-gray-700" />
                  </span>
                  <ul
                    class="bg-white rounded shadow-md md:absolute right-0 min-w-40 z-30 sub-menu-sm hidden flex flex-col border-blue-200 border">
                    <li class="px-2 py-1 cursor-pointer text-left">Value 1</li>
                    <li class="px-2 py-1 cursor-pointer text-left">Value 2</li>
                  </ul>
                </div>
              </a>
              <a class="text-gray-700 hover:text-red-600">Contact</a>

            <div class="mx-5 w-[20%] items-center hidden md:flex">
              <input type="text" placeholder="Keyword" class="border border-gray-300 p-2 rounded-l-lg">

              <!--Search icon-->
              <button type="submit" class="text-gray-300 border border-gray-300 py-2 px-4 rounded-r-lg">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </button>
          </div>

        </nav>

      </div>
      <nav :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }" class="sm:hidden bg-white shadow-md">
        <router-link :class="{ 'bg-red-500 p-1 text-white': $route.name === 'HomePage' }" :to="'/'"
          class="block px-6 py-2 text-gray-700 hover:text-red-300">Home</router-link>
        <router-link :class="{ 'bg-red-500 p-1 text-white': $route.name === 'Category' }" :to="'/category'"
          class="block px-6 py-2 text-gray-700 hover:text-red-300">Categories</router-link>
        <router-link :class="{ 'bg-red-500 p-1 text-white': $route.name === 'SingleNew' }" :to="'/single-new'"
          class="block px-6 py-2 text-gray-700 hover:text-red-300">Single News</router-link>
        <a class="block px-6 py-2 text-gray-700 hover:text-red-300">Dropdown</a>
        <a class="block px-6 py-2 text-gray-700 hover:text-red-300">Contact</a>
      </nav>
    </header>


  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };




    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style lang="scss">
.bg-f5f5f5 {
  background-color: #f5f5f5;
}

.fs-13 {
  font-size: 12px;
}

.display-mb {
  @media (max-width:768px) {
    display: none
  }
}

.center-header {
  @apply bg-gray-300 h-10 w-full
}

.dropdown-hard {
  position: relative;

  &:hover .sub-menu {
    display: flex;
    top: 19px;
    left: 0;
  }

  &:hover .sub-menu-sm {
    display: flex;
    top: 30px;
    right: 0px;
    max-height: 300px;

    li {
      &:hover {
        background-color: #ddd;
      }

      padding: 8px;
      white-space: nowrap;
    }
  }


  div.active {
    @apply border-blue-500 border-b-2;

    &>span {
      @apply text-blue-500;
    }
  }
}</style>
