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
    <div class="min-h-screen w-creen bg-slate-300">
      <div class="wrapper-page">
        <Loading v-if="loading"></Loading>
        <router-view />
      </div>
      <Footer></Footer>
     </div>
</template>

<style lang="scss">

.wrapper-page{

  max-width: 1280px;
  position: relative;
  left: 10%;
  right: 10%;
  @media(max-width:1281px) {
    left: 0%;
    right: 0%;
  }
}

</style>
