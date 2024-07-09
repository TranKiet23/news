<script>
import HomePage from './pages/home-page/HomePage.vue'
import Loading from './components/Loading.vue'
import HeaderLayout from './components/HeaderLayout.vue';
export default {
  name: 'App',
  components: { Loading, HomePage, HeaderLayout },
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
    <body>
      <Loading v-if="loading"></Loading>
      <HomePage @load-data="functionLoad"></HomePage>

    </body>
</template>

<style lang="scss"></style>
