
<template>
    <div class="flex justify-center mt-1 md:mt-3">
        <nav class="inline-flex rounded-md shadow">
            <button @click="changePage(1)" :disabled="currentPage === 1"
                class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l hover:bg-gray-100 hover:text-gray-700">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="text-gray-700 cursor-pointer" />
            </button>
            <button v-for="page in totalPages" :key="page" @click="changePage(page)"
                :class="['py-2 px-3 leading-tight', { 'bg-red-500 text-white': currentPage === page, 'bg-white text-gray-500': currentPage !== page }]"
                class="border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                {{ page }}
            </button>
            <button @click="changePage(totalPages)" :disabled="currentPage === totalPages"
                class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                <font-awesome-icon :icon="['fas', 'angle-right']" class="text-gray-700" />
            </button>
        </nav>
    </div>
    `
</template>

<script>
import { ref, computed, defineComponent } from 'vue';
export default {
    props: {
        total: Number,
        pageSize: Number,
        currentPage: Number
    },
    emits: ['update:currentPage'],
    setup(props, { emit }) {
        const totalPages = computed(() => Math.ceil(props.total / props.pageSize));

        const changePage = (page) => {
            if (page > 0 && page <= totalPages.value) {
                emit('update:currentPage', page);
            }
        };

        return {
            totalPages,
            changePage
        };
    },
};
</script>
