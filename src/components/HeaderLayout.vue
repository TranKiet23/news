<template>
  <header class="w-full">
    <nav class="container-header">
      <div class="w-full flex justify-between items-center">
        <div class="flex justify-start items-center">
          <button type="button" class="border-red mx-8 py-2 px-4 bg-red-500">
            <span class="text-white text-xl">Tranding</span>
          </button>
          <div class="group-content-header text-center">
            <div class="flex items-center">
              <div class="border p-2 mx-3 border-gray-200 bg-f5f5f5">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-300" />
              </div>
              <div class="border p-2 text-center mx-2 border-gray-200 bg-f5f5f5">
                <font-awesome-icon :icon="['fas', 'angle-right']" class="text-gray-300" />
              </div>
              <div class="content ml-3">
                <span class="text-m text-gray-500">Labore sit justo amet eos sed, ety sanctus dolor diam eos</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-header mr-2">
          <span class="text-m text-gray-500">Monday</span>
        </div>
      </div>
      <div class="center-header">
        <div class="flex items-center flex-shrink-0 text-white ml-10 py-2">
          <span class="fs-22  tracking-tight text-red-500">NEWS <span class="fs-22 text-black ">ROOM</span></span>
        </div>
      </div>
      <div class="flex bg-f5f5f5 w-full justify-between">
        <div>
          <ul class="flex  p-3">
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">Home</a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">Category</a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">sign news</a>
            </li>
            <li class="mr-6">
              <div class="flex h-30 cursor-pointer align-middle no-underline hover:text-gray-900 border-white justify-center items-center dropdown-hard ml-2">
                  <span class="btn-cus bg-btn-blue">
                      Dropdown
                      <i class="fas fa-angle-down ml-1"></i>
                  </span>
                  <ul
                      class="bg-white rounded shadow-md md:absolute right-0 min-w-40 z-30 sub-menu-sm hidden flex flex-col border-blue-200 border"
                  >
                      <li
                          class="px-2 py-1 cursor-pointer text-left"
                      >Value 1</li>
                      <li
                          class="px-2 py-1 cursor-pointer text-left"
                      >Value 2</li>
                  </ul>
              </div>
            </li>

          </ul>
        </div>

        <div class="mx-5 flex w-[20%] items-center justify-between">
          <input type="search"
            class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 "
            placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />

          <!--Search icon-->
          <span
            class="flex items-center  whitespace-nowrap border border-solid border-secondary-500 rounded px-3 py-1.5 text-center text-base font-normal text-gray-600  [&>svg]:w-5"
            id="basic-addon2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </div>


      </div>



    </nav>
  </header>
</template>


<style lang="scss">
.container-header {
  width: 100%;
  background-color: #f5f5f5;
  max-height: 49px;
}

.bg-f5f5f5 {
  background-color: #f5f5f5;
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
    .sub-menu {
        max-width: 200px;
        max-height: calc(100vh - 400px);
        min-height: 38px;
        @apply shadow-lg;
        li {
            padding: 10px 5px;
            &:hover {
                background-color: #ddd;
            }
            &:nth-child(1) {
                @apply rounded-t-md;
            }
            &:nth-last-child(1) {
                @apply rounded-b-md;
            }
        }
        .active {
                    @apply border-blue-700 border-l-2 bg-blue-300;
                }
    }
    div.active {
        @apply border-blue-500 border-b-2;
        &>span {
            @apply text-blue-500;
        }
    }
}
</style>

