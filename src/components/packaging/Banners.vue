<template>
  <div id="app">
    <!-- 轮播图 -->
     <transition name="fade" mode="out-in">
      <div class="block" v-if="scrollTop==0">
        <el-carousel trigger="click" :height=" height+ 'px'">
          <el-carousel-item v-for="(item, index) in banner" :key="index">
            <!-- <router-link :to="{name:'prodetail',params: {id: item.goods_id}}"> -->
            <div class="banner" :style="{backgroundImage: 'url('+ 'http://fyd.meilashidai.net/' + item.img +')'}"></div>
            <!-- </router-link> -->
          </el-carousel-item>
        </el-carousel>
      </div>
     </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      banner: [],
      height: 0,
      scrollTop: 0
    };
  },
  beforeMount(){
    this.height = document.documentElement.clientHeight;
  },
  mounted(){
    window.addEventListener('scroll',this.show)
  },
  methods:{
    show(){
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  created() {
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
};
</script>

<style scoped>
  body{
    width: 100%;
    height: 100%;
  }
  .banner{
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .fade-enter-active,.fade-leave-active{
    transition:all .8s ease-out;
  }
  .fade-enter{
      /* 进入时的动画  */
      transform:translateY(500px);
      opacity:0;
  }
  .fade-leave-active{
      /* 离开时的动画 */
      transform:translateY(-500px);
      opacity:0;
  }
/* 
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  } */

/* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>
