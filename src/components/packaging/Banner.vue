<template>
  <div id="app">
     <el-carousel height="500px">
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <img :src="'http://fyd.meilashidai.net' + item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      banner:[]
    }
  },
  created(){
    var $this = this;
    $this.$ajax
    .get("http://fyd.meilashidai.net/home/Index/homePage")
    .then(res => {
        // console.log(res);
        let head = res.data.result;
        $this.banner = head.banner;
    })
    .catch(res => {
        console.log(res);
    });
 }
}
</script>

<style>

</style>
