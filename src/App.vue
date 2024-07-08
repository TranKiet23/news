<script>
import HomePage from './pages/home-page/HomePage.vue'
import Loading from './components/Loading.vue'
export default {
  name: 'App',
  components: { Loading, HomePage },
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
  <div>
    <Loading v-if="loading"></Loading>
    <HomePage @load-data="functionLoad"></HomePage>
  </div>
</template>

<style lang="scss"></style>
