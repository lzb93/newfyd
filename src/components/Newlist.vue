<template>
  <div id="app">
     <router-view> </router-view>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">{{$t('message.newsinformation')}}</div></el-col>
    </el-row>

   <el-row>
        <el-col :span="24" v-for="(v, i) in fileterList" :key="i">
            <div v-if="i % 2 == 0">
                <el-row type="flex" class="row-bg" justify="center">
                  <el-col class="verticalcenter" :span="9">
                    <div class="grid-content bg-purple">
                      <p v-html="v.content"></p>
                    </div>
                  </el-col>
                  <el-col :span="9">
                    <div class="grid-content bg-purple-light">
                      <router-link :to="{name:'newdetail',params: {id:v.article_id}}">
                       <img class="introduce" :src=" 'http://fyd.meilashidai.net' + v.thumb" alt="newimg">
                      </router-link>
                    </div>
                  </el-col>
              </el-row>
            </div>
             <div v-else>
               <el-row type="flex" class="row-bg" justify="center">
                 <el-col :span="9">
                    <div class="grid-content bg-purple-light">
                      <router-link :to="{name:'newdetail',params: {id:v.article_id}}">
                       <img class="introduce" :src=" 'http://fyd.meilashidai.net' + v.thumb" alt="newimg">
                      </router-link>
                    </div>
                  </el-col>
                  <el-col class="verticalcenter" :span="9">
                    <div class="grid-content bg-purple">
                      <p v-html="v.content"></p>
                    </div>
                  </el-col>
              </el-row>
            </div>
        </el-col>
    </el-row>
          <!--页码-->
            <!-- <div class='page'>
                <el-button :disabled="page==1? true : false" @click="prev" class="el-icon-arrow-left"></el-button>
                <span :class="page==num ? 'activepage' : ''" v-for='(num,index) in pageCounter' :key="index" @click='page=num'>{{num}}</span>
                <el-button :disabled="page>=pageCounter? true : false" @click="next" class="el-icon-arrow-right"></el-button>
            </div> -->
    <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
              <div class="block">
                <el-pagination
                  layout="prev, pager, next"
                  :pager-count="5"
                  :page-size="listRows"
                  :total="totalRows"
                  :current-page="nowPage"
                  @current-change="handleCurrentChange"
                ></el-pagination>
              </div>
            </div>
          </el-col>
    </el-row>
  </div>
</template>

<script>
import Navs from '../components/packaging/Navs'
import Banners from '../components/packaging/Banners'
import Footers from '../components/packaging/Footers'
export default {
  name: 'App',
   components: {
    Navs,
    Banners,
    Footers
  },
  data(){
    return{
        // 新闻列表
        goodList: [],
        // 当前是第几页
        // page: 1,
        // 每页显示几个
        // pageSize: 4,
        // 共多少页
        // pageCounter: 1,
        
        // element分页
        currentPage3: 1,
         // 共多少页
        totalRows: 1,
         // 每页显示几个
        listRows: 1,
         // 当前是第几页
        nowPage: 1
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.nowPage = val;
    },
    getNewlist(){
      var $this = this;
        $this.$ajax.get('http://fyd.meilashidai.net/home/article/articleList')
        .then((res) => {
          console.log(res);
          var head = res.data.page;
          $this.goodList = res.data.result.goodList;
          $this.totalRows = head.totalRows;
          $this.listRows = head.listRows;
          $this.nowPage = head.nowPage;
        })
    }
  },
  computed: {
     fileterList() {
      return this.goodList.filter((ele, index) => {
        return (
          index >= this.listRows * (this.nowPage - 1) &&
          index < this.listRows * this.nowPage
        );
      });
    }
  },
  created (){
    this.getNewlist();
  }
}
</script>

<style scoped>
  .el-input__inner{
    border: 1px solid red ;
  }
  .page{
    text-align: center;
    margin: 10px 0;
  }
  .activepage{
    color: #409eff;
    font-weight: bold;
  }
  .page span{
    margin: 0 10px;
  }
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
  .verticalcenter {
    margin: auto 0;
  }
</style>
