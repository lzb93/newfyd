<template>
  <div id="app">
     <Navs></Navs>
    <Banner></Banner>
     <router-view> </router-view>
    
    <Footers></Footers>
  </div>
</template>

<script>
import Navs from '../components/packaging/Navs'
import Banner from '../components/packaging/Banner'
import Footers from '../components/packaging/Footers'
export default {
  name: 'App',
   components: {
    Navs,
    Banner,
    Footers
  },
  data(){
    return{
      
    }
  },
  methods: {
  
  },
  computed: {
   
  },
  created (){
   
  }
}
</script>

<style scoped>
  
</style>
