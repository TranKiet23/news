<script>
import Loading from './components/Loading.vue'
import HeaderLayout from './components/HeaderLayout.vue';
import Footer from './components/FooterLayout.vue';


export default {
  name: 'App',
  components: { Loading, HeaderLayout, Footer },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    functionLoad(val) {
      this.loading = val
    },
  }
}
</script>

<template>
    <HeaderLayout />
    <div class="min-h-screen w-creen bg-gray-200">
      <div class="wrapper-page">
        <Loading v-if="loading"></Loading>
        <router-view />
      </div>
      <Footer></Footer>
     </div>
</template>

<style lang="scss">

.wrapper-page{
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  transform: translate(22%,5px);
 
}

</style>
