<template>
  <div id="app">
     <Navs></Navs>
    <Banner></Banner>
    <!-- 第一种方法 -->
    <!-- <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
      <p v-show="show" class="animated"></p>
    </transition> -->

    <!-- 第二种方法 -->
    <!-- <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <p v-show="show"></p>
    </transition> -->

    <!-- 多元素运动 -->
    <!-- <transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
      <p v-show="show" class="animated" :key="1"></p>
      <p v-show="show" class="animated" :key="2"></p>
    </transition-group> -->
    <el-row>
        <el-col :span="24">
             <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="18">
                  <div class="grid-content bg-purple">
                    <div v-html="content"></div>
                  </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
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
    Footers,
    Map
  },
  data(){
    return{
        show:false,
        content: ''
    }
  },
  methods: {
    
  },
  mounted (){
    // window.addEventListener('scroll',this.add)
      // this.show = !this.show
  },
  created (){
    var $this = this;
    $this.$ajax.get('http://fyd.meilashidai.net/home/Index/about')
    .then((res) => {
      console.log(res);
      var head = res.data;
      $this.content = head;
    })
  }
}
</script>

<style scoped>
   /* p {
      width: 300px;
      height: 300px;
      background: cadetblue;
      margin: 10px auto;
    } */
  .el-col {
    border-radius: 4px;
  }
  /* .bg-purple-dark {
    background: #99a9bf;
  } */
  .bg-purple {
    /* background: #d3dce6; */
  }
  .bg-purple-light {
    /* background: #e5e9f2; */
  }
  .grid-content {
    line-height: 36px;
    text-align: center;
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    /* background-color: #f9fafc; */
  }
</style>
