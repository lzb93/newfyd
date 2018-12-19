<template>
  <div id="app">
    <div v-if="articleInfo">
       <el-row>
          <el-col :span="24">
              <el-row type="flex" class="row-bg" justify="center">
                  <el-col :span="18">
                    <div class="grid-content bg-purple">
                      <p>{{articleInfo.title}}</p>
                      <img :src="'http://fyd.meilashidai.net' + articleInfo.thumb" alt="newdeimg">
                    </div>
                  </el-col>
              </el-row>
          </el-col>
      </el-row>
    </div>
   <div v-else>
      <el-row>
        <el-col :span="24">
          <p style="text-align: center;">{{msg}}</p>
        </el-col>
      </el-row>
   </div>
   
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      articleInfo: [],
      msg: ''
    }
  },
   methods: {
    getNewdetail(id) {
      var $this = this;
      var url = "http://fyd.meilashidai.net/home/article/articleInfo?id=" + id;
      $this.$ajax.get(url).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          var head = res.data.result;
          $this.articleInfo = head.article_info;
        } else {
          /*新闻不存在*/
          $this.msg = res.data.msg;
        }
      });
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.getNewdetail(this.$route.params.id);
  }
}
</script>

<style scoped>
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
