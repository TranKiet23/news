<script>
import Loading from './components/Loading.vue'
import HeaderLayout from './components/HeaderLayout.vue';
import Footer from './components/FooterLayout.vue';

import { debounce } from 'lodash'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: { Loading, HeaderLayout, Footer },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  watch: {
    isLoading(value) {
      if (value == true) {
        this.loading = value
        return
      }
      this.delayLoading(value)
    },
  },
  methods: {
    delayLoading: debounce(function () {
      this.loading = false
    }, 500),
  },
}
</script>
<template>
  <HeaderLayout />

  <!-- Main Content -->
  <div class="min-h-screen w-creen bg-gray-100">
    <Loading v-if="loading"></Loading>

    <div class="wrapper-page">
      <router-view />
    </div>
  </div>
  <Footer></Footer>
</template>

<style lang="scss">
.wrapper-page {
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  transform: translate(21%, 5px);
  @media (max-width: 1440px) { 
    max-width: 1250px;
    transform: translate(6%, 0%);
  }
  @media (max-width: 769px) { 
    max-width: 700px;
    transform: translate(1%, 1%);
  }
  @media (max-width: 600px) { 
    max-width: 575px;
    transform: translate(1%, 1%);
  }


}
</style>
