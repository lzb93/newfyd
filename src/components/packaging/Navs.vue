<template>
  <div id="app">
     <!-- 导航条 -->
     <div class="navs">
        <div></div>
        <div></div>
        <div style="padding-top: 7px;">
          <router-link to="/home">
              <img src="../../assets/logo.png" alt="">
          </router-link>
        </div>
      <el-menu id="menu" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router >
          <el-menu-item index="/home">{{$t('message.home')}}</el-menu-item>

            <el-submenu index="">
              <template slot="title">{{$t('message.product')}}</template>
                <ul class="typelist">
                    <li class="typeindex" v-for="(item, index) in catelist" :key="index">
                      <router-link class="type" :to="{name:'pro',params: {id: item.id}}">
                          <img class="typeimg hvr-grow-shadow" :src="'http://fyd.meilashidai.net'+item.image" alt="">
                      </router-link>
                    </li>
                </ul>
            </el-submenu>
            
          <el-menu-item index=""><router-link class="neweye" to="/contactus">{{$t('message.latestlensseries')}}</router-link></el-menu-item>

          <el-menu-item index="/new">{{$t('message.latestnews')}}</el-menu-item>

          <el-menu-item index="/aboutus">{{$t('message.aboutus')}}</el-menu-item>

          <el-menu-item index="/contactus">{{$t('message.contactus')}}</el-menu-item>
        </el-menu>
        <div class="select">
            <el-select size='small' v-model="selectValue" @change="langChange" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
     </div>
  </div> 
</template>

<script>
import Bus from './bus.js'
export default {
  name: 'App',
  data() {
    return {
      china: true,
      selectValue:'',
      options:[
          {
          value: 'cn',
          label: '简体中文'
          }, {
          value: 'en',
          label: 'English'
          }
      ],
      catelist: []
    };
  },
  computed:{
      activeIndex(){
        return this.$route.path.replace('','')
        // console.log(this.$router)
      }
  },
  watch: {
   
  },
  mounted (){
    
  },
  methods: {
    handleSelect(key, keyPath) {
      
    },
    changeLanguage () {
      if (this.$i18n.locale == 'en-us') {
        this.$i18n.locale = 'zh-cn'
        this.china = true
      } else {
        this.$i18n.locale = 'en-us'
        this.china = false
      }
    },
    langChange(e){
      localStorage.setItem('lang',e);
      this.$i18n.locale = e;
      }
    },
    created() {
        let that = this;
        // console.log(localStorage.lang)
        that.selectValue = localStorage.lang == undefined?'cn':localStorage.lang
        var $this = this;
        that.$ajax
          .get("http://fyd.meilashidai.net/home/Index/homePage")
          .then(res => {
            console.log(res);
            let head = res.data.result;
            that.catelist = head.cate_list;
          })
          .catch(res => {
            console.log(res);
          });
        
    }
}
</script>

<style scoped>
  body,html{
    width: 100%;
  }
  #app{
    width: 100%;
  }
 .navs{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
 }
 .typelist{
   display: flex;
   flex-wrap: wrap;
   margin: 0 auto;
   padding: 20px;
   list-style: none;
   width: 780px;
 }
 .typeindex{
   padding: 10px;
   box-sizing: border-box;
 }
 .typeimg{
   display: inline-block;
   width: 240px;
   height: 150px;
 }
 #menu{
   display: flex;
   flex-wrap: nowrap;
   margin-bottom: 20px;
 }
 .select{
   line-height: 57px;
 }
 .neweye{
   display: inline-block;
   text-decoration: none;
   padding-bottom: 10px;
   box-sizing: border-box;
 }
 .current{
   color: red !important;
   /* border-bottom: 2px solid red; */
 }
 .type{
   color: #333;
   text-decoration: none;
 }
 .txcenter{
   text-align: center
 }
 .el-menu--popup{
   width: 100% !important;
   position: fixed !important;
   left: 0 !important;
 }
</style>
