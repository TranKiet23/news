<template>
<div class="md:p-6 p-2 rounded shadow mb-6">
    <div v-for="comment in comments" :key="comment.id" class="flex mb-4">
        <img :src="comment.image" alt="Profile picture" class="md:w-28 w-20 h-20 md:h-28 object-cover rounded-full">
        <div class="ml-4">
            <div class="text-gray-600">{{ comment.date }}</div>
            <div class="font-bold">{{ comment.name }}</div>
            <p class="mt-2 text-gray-600">{{ comment.content }}</p>
            <a href="#" class="text-blue-500 hover:underline mt-2 inline-block">Reply</a>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['commentsData'],
    setup(props) {
        const comments = ref(props.commentsData);
        return { comments };
    }
}
</script>
`