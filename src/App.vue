<template>
  <div id="app">
    <search></search>
  <!-- <button v-on:click="getSearch">kjhsfhd</button> -->
  <!-- <router-view/> -->
  </div>
</template>

<script>
// import home from '@/components/home'
import axios from 'axios'
import search from '@/components/search'


export default {

  name: 'App',
  data () {
    return {
      searcResults: [],
      searchValue: '',
      apiUrl: "https://api.themoviedb.org/3/movie/popular?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&page=1"
    }
  },
  components: {
    search
  },
  methods: {

    getSearch () {
        axios.get(this.apiUrl).then(res => console.log(res))
    }
  }
}

</script>

<style>

</style>
