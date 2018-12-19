<template>
  <div id="app">
    <Navs></Navs>
    <Banner></Banner>
  
     <el-row class="Pro">
         <el-col :span="24">
           <div class="grid-content bg-purple-dark">
               <el-row :gutter="20">
                  <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <div class="flex">
                           <div>
                             <el-button @click="allpro" type="primary">全部</el-button>
                           </div>
                           <div class="dropdown" v-for="(v, i) in catelist" :key="i">
                              <el-dropdown>
                                <span class="el-dropdown-link">
                                    {{v.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                  <el-dropdown-item @click.native="change(v.id,v.name)">{{catelist[i].son[0].name}}</el-dropdown-item>
                                </el-dropdown-menu>
                              </el-dropdown>
                           </div>
                       </div>
                    </div>
                  </el-col>
               </el-row>
                  <el-row class="row-bg center" >
                      <el-col class="textcenter" :span="8" v-for="(v, i) in goodList" :key="i">
                        <div class="pro grid-content bg-purple">
                          <router-link class="type" :to="{name:'prodetail',params: {id:v.goods_id}}">
                            <div class="seemore">查看更多</div>
                            <img :src="'http://fyd.meilashidai.net' + v.original_img" alt="">
                            <p>{{v.goods_name}}</p>
                          </router-link>
                        </div>
                      </el-col>
                  </el-row>
             </div>
          </el-col>
    </el-row>
                
    <Footers></Footers>
  </div>
</template>

<script>
import Navs from '../components/packaging/Navs'
import Banner from '../components/packaging/Banner'
import Footers from '../components/packaging/Footers'
import Bus from './packaging/bus.js'
export default {
  name: 'App',
   components: {
    Navs,
    Banner,
    Footers
  },
  data(){
    return{
      catelist: [],
      goodList: [],
      name: ''
    }
  },
  mounted (){

  },
  methods: {
    change(id,name){
      this.getpro(id);
    },
    getpro(id){
        var $this = this;
        var url = 'http://fyd.meilashidai.net/home/Goods/goodsList?id=' + id;
        $this.$ajax.get(url)
        .then( (res) => {
          // console.log(res);
          let head = res.data.result;
          $this.goodList = head.goodList;
        })
    },
    listpro(){
       var $this = this;
        $this.$ajax.get('http://fyd.meilashidai.net/home/Index/homePage')
        .then( (res) => {
          console.log(res);
          $this.catelist = res.data.result.cate_list;
        })
    },
    allpro(){
      this.getpro();
    }
  },
  watch:{
      '$route'(to,from){
        this.getpro(to.params.id)
      }
  },
  created (){
   this.listpro();
   this.getpro(this.$route.params.id)
  }
}
</script>

<style scoped>
  .seemore{
    display: none;
  }
  .type{
    color: #333;
    text-decoration: none;
  }
  .Pro{
    margin-top: 15px;
  }
  .dropdown{
    margin: 0 10px;
  }
  .center{
    width: 1200px;
    margin: 0 auto; 
  }
  .pro{
    width: 340px;
    margin: 20px auto;
  }
  .pro img{
    width: 100%;
    height: 320px;
  }
  .el-col {
    border-radius: 4px;
  }
  .fl{
    float: left;
  }
  .clear{
    clear: both;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
  }
  .row-bg {
    padding: 10px 0;
  }
  .selectflex{
      display: flex;
      justify-content: center;
  }
  .flex{
    display: flex;
    justify-content: center;
    line-height: 37px;
  }
</style>
