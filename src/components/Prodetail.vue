<template>
  <div id="app">
    <Navs></Navs>
    <Banner></Banner>
    <div v-if="goodInfo">
        <el-row >
          <el-col :span="24">
              <el-row type="flex" class="row-bg" justify="center">
                  <el-col :span="12" >
                    <div class="grid-content bg-purple flex">
                      <div> 
                          <p>{{goodInfo.goods_name}}</p>
                          <pre>{{goodInfo.goods_trait}}</pre>
                      </div>
                      <div><img class="img" :src="'http://fyd.meilashidai.net' + goodInfo.trait_img" alt="ProDetailImg"></div>
                    </div>
                  </el-col>
              </el-row>
          </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" class="row-bg" justify="center">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <p>产品详情</p>
              <p>{{goodInfo.goods_remark}}</p>
              <div><img class="img height" :src="'http://fyd.meilashidai.net' + goodInfo.original_img" alt="ProDetailImg"></div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p>为您推荐</p>
              <div><img class="img" :src="'http://fyd.meilashidai.net' + goodInfo.trait_img" alt="ProDetailImg"></div>
              <div><img class="img" :src="'http://fyd.meilashidai.net' + goodInfo.original_img" alt="ProDetailImg"></div>
            </div>
          </el-col>
      </el-row>
    </div>
    <div v-else>
        <el-row >
            <el-col style="text-align: center;" :span="24">
                {{msg}}
            </el-col>
        </el-row>
    </div>
    <Footers></Footers>
  </div>
</template>

<script>
import Navs from "../components/packaging/Navs";
import Banner from "../components/packaging/Banner";
import Footers from "../components/packaging/Footers";
export default {
  name: "App",
  components: {
    Navs,
    Banner,
    Footers
  },
  data() {
    return {
      msg: "",
      goodInfo: [],
    };
  },
  methods: {
    getProdetail(id) {
      var $this = this;
      var url = "http://fyd.meilashidai.net/home/Goods/goodsInfo?id=" + id;
      $this.$ajax.get(url).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          var head = res.data.result;
          var _this = this;
          _this.goodInfo = head.good_info;
        } else {
          /*商品不存在或下架*/
          $this.msg = res.data.msg;
        }
      });
    }
  },
  watch:{
      '$route'(to,from){
        this.getProdetail(to.params.id)
      }
  },
  created() {
    // console.log(this.$route.params.id)
    this.getProdetail(this.$route.params.id);
  }
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  /* background: #99a9bf; */
}
.bg-purple {
  /* background: #d3dce6; */
  box-shadow: 0 0 2px 2px darkgray;
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
.img {
  width: 100%;
}
</style>
