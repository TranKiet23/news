<template>
  <div class="card-carousel">
    <div class="title-header bg-white">
      <h2 class="text-black">{{ title }}</h2>
    <div class="carousel-controls">
      <button @click="prevSlide"><span>‹</span></button>
      <button @click="nextSlide"><span>›</span></button>
    </div>
    </div>

    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(card, index) in visibleCards" :key="index">
          <div class="card">
            <img :src="card.image" :alt="card.title" class="card-image" />
            <div class="card-content">
              <p class="category">{{ card.category }} <span class="text-gray-400 font-normal">/{{ card.date }}</span></p>
              <h3>{{ card.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    cards: {
      type: Array,
      required: true
    },
    cardsToShow: {
      type: Number,
      default: 2
    },
    title: {
      type: String,
      default: 'Business'
    }
  },
  setup(props) {
    const currentIndex = ref(0);

    const visibleCards = computed(() => {
      const start = currentIndex.value * props.cardsToShow;
      return props.cards.slice(start, start + props.cardsToShow);
    });

    const nextSlide = () => {
      if ((currentIndex.value + 1) * props.cardsToShow < props.cards.length) {
        currentIndex.value += 1;
      }
    };

    const prevSlide = () => {
      if (currentIndex.value > 0) {
        currentIndex.value -= 1;
      }
    };

    return {
      currentIndex,
      visibleCards,
      nextSlide,
      prevSlide
    };
  }
};
</script>

<style scoped>
.card-carousel {
  width: 99%;
  margin: auto;
  position: relative;
}
.title-header {
  display: flex;
  position: relative;
  max-width: 96%;
  left: 0%;
}

h2 {
  margin: 10px 0;
  color: black;
  font-size: 18px;
  padding-left: 5px;
}

.carousel-controls {
  position: absolute;
  top: 7px;
  right: 10px;
  display: flex;
  gap: 10px;
}

.carousel-controls button {
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0px 5px;
  @apply bg-gray-200;
  span {
    @apply text-white
  }

}

.carousel {
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 50%;
  box-sizing: border-box;
  padding: 10px;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 25px;
    display: flex;
    flex-direction: column;
}

.card-content .category {
  font-weight: bold;
  margin-bottom: 5px;
  @apply text-orange-400
}

.card-content h3 {
  margin: 0;
  font-size: 1rem;
  @apply text-gray-400
}
</style>
