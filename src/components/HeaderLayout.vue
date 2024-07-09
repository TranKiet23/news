<template>
  <header class="w-full relative">
    <nav class="container-header">
      <div class="w-full flex justify-between items-center">
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
              <div class="content ml-3">
                <span class="fs-13 text-gray-500">Labore sit justo amet eos sed, ety sanctus dolor diam eos</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-header mr-2">
          <div class="text-gray-600">Monday, January 01, 2045</div>
        </div>
      </div>
      <div class="center-header">
        <div class="flex items-center flex-shrink-0 text-white ml-10 py-2">
          <span class="fs-22  tracking-tight text-red-500">NEWS <span class="fs-22 text-black ">ROOM</span></span>
        </div>
      </div>
      <div class="flex bg-f5f5f5 w-full justify-between">
        <div>
          <ul class="flex pt-2 cursor-pointer">
            <li class="mr-2">
              <a class="text-gray-500 hover:text-white hover:bg-red-500 px-2 pb-4 pt-2" :class="{'bg-red-500 text-white' : $route.name === 'HomePage'}" @click="openPage('HomePage')">Home</a>
            </li>
            <li class="mr-2">
              <a class="text-gray-500 hover:text-white hover:bg-red-500 px-2 pb-4 pt-2" :class="{'bg-red-500 text-white' : $route.name === 'Category'}" @click="openPage('Category')" >Category</a>
            </li>
            <li class="mr-2">
              <a class="text-gray-500 hover:text-white hover:bg-red-500 px-2 pb-4 pt-2" :class="{'bg-red-500 text-white' : $route.name === 'SingleNew'}" @click="openPage('SingleNew')">Sign news</a>
            </li>
            <li class="mr-2">
              <div
                class="flex h-30 cursor-pointer align-middle no-underline hover:text-gray-900 border-white justify-center items-center dropdown-hard">
                <span class="text-gray-500">
                  Dropdown
                  <font-awesome-icon :icon="['fas', 'angle-down']" class="fs-13 text-black" />
                </span>
                <ul
                  class="bg-white rounded shadow-md md:absolute right-0 min-w-40 z-30 sub-menu-sm hidden flex flex-col border-blue-200 border">
                  <li class="px-2 py-1 cursor-pointer text-left">Value 1</li>
                  <li class="px-2 py-1 cursor-pointer text-left">Value 2</li>
                </ul>
              </div>
            </li>
            <li class="mr-2">
              <a class="text-gray-500 hover:text-white hover:bg-red-500 px-2 pb-4 pt-2" href="#" >Contact</a>
            </li>

          </ul>
        </div>

        <div class="mx-5 flex w-[20%] items-center">
          <input type="text" placeholder="Keyword" class="border border-gray-300 p-2 rounded-l-lg">

          <!--Search icon-->
          <button type="submit" class="text-gray-300 border border-gray-300 py-2 px-4 rounded-r-lg">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
        </div>


      </div>



    </nav>
  </header>
  
</template>
<script>
export default {
    methods: {
    openPage(param) {
      this.$router.push({
          name: param
      })
   }
  }
}
</script>

<style lang="scss">
.container-header {
  width: 100%;
  background-color: #f5f5f5;
  max-height: 150px;
}

.bg-f5f5f5 {
  background-color: #f5f5f5;
}

.fs-13 {
  font-size: 12px;
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

