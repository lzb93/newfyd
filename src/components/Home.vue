<template>
  <div class="hello">
     <Banners></Banners>
     <div style="width: 100%;height: 100px;"></div>
     <Navs :class="scrollTop>0? fix : ''"></Navs>
     <div style="width: 100%;height: 80px;"></div>
    <!-- 产品展示 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h1>{{$t('message.productdisplay')}}</h1>
        </div>
      </el-col>
    </el-row>
    <!-- <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceInRight"> -->
    <el-row type="flex" class="row-bg" justify="center" style="margin: 20px 0;">
      <el-col :span="5" v-for="(v, i) in showgood" :key="i" style="text-align: center;margin: 0 20px;">
        <div class="hvr-grow-shadow">
          <div class="grid-content bg-purple proview">
            <router-link class="routerfont" :to="{name:'prodetail',params: {id:v.goods_id}}">
              <img class="proimg" :src=" 'http://fyd.meilashidai.net' + v.original_img" alt="img">
              <p class="gname">{{v.goods_name}}</p>
              <p class="gremark">{{v.goods_remark}}</p>
            </router-link>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- </transition> -->
    <!-- 查看更多 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <a class="more" href>
            {{$t('message.viewmore')}}
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
      </el-col>
    </el-row>
    <!-- 查看更多下的图片 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div id="box1">
            <div id="line">
              <span class="el-icon-arrow-left"></span>
              <span class="el-icon-arrow-right"></span>
            </div>
            <div id="box"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 镀膜工艺 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h1>{{$t('message.coatingtechnology')}}</h1>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" v-for="(v, i) in introduce" :key="i">
        <div v-if="i % 2 == 0">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col class="verticalcenter" :span="9">
              <div class="grid-content bg-purple">
                <pre>{{v.goods_trait}}</pre>
              </div>
            </el-col>
            <el-col :span="9">
              <div class="grid-content bg-purple-light">
                <router-link :to="{name:'prodetail',params: {id:v.goods_id}}">
                  <img
                    class="introduce"
                    :src=" 'http://fyd.meilashidai.net' + v.trait_img"
                    alt="Dmgy"
                  >
                </router-link>
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-else>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="9">
              <div class="grid-content bg-purple-light">
                <router-link :to="{name:'prodetail',params: {id:v.goods_id}}">
                  <img
                    class="introduce"
                    :src=" 'http://fyd.meilashidai.net' + v.trait_img"
                    alt="Dmgy"
                  >
                </router-link>
              </div>
            </el-col>
            <el-col class="verticalcenter" :span="9">
              <div class="grid-content bg-purple">
                <pre>{{v.goods_trait}}</pre>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <!-- 镀膜工艺下的图片 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img style="width: 100%" src="../assets/center1.png" alt>
        </div>
      </el-col>
    </el-row>
    <!-- 新闻动态 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h1>{{$t('message.newsandtrends')}}</h1>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="18">
        <el-row class="row-bg">
          <el-col :span="8" v-for="(v, i) in news" :key="i">
            <div class="grid-content bg-purple imgwidth">
              <router-link class="type" :to="{name:'newdetail',params: {id:v.article_id}}">
                <div>
                  <img class="thimg" :src=" 'http://fyd.meilashidai.net' + v.thumb" alt="new">
                </div>
                <div>{{v.title}}</div>
                <div v-html="v.content"></div>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <Footers></Footers>
  </div>
</template>

<script>
import Navs from "../components/packaging/Navs";
import Banners from "../components/packaging/Banners";
import Footers from "../components/packaging/Footers";
export default {
  components: {
    Navs,
    Banners,
    Footers
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      showgood: [],
      introduce: [],
      news: [],
      scrollTop: 0,
      fix:'fix'
    };
  },

  methods: {
    handleSelect(key, keyPath) {},
    getaxios() {
      var $this = this;
      $this.$ajax
        .get("http://fyd.meilashidai.net/home/Index/homePage")
        .then(res => {
          console.log(res);
          let head = res.data.result;
          $this.showgood = head.show_good;
          $this.introduce = head.introduce;
          $this.news = head.news;
        })
        .catch(res => {
          console.log(res);
        });
    },
    show(){
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(this.scrollTop)
    }
  },
  mounted() {
    window.addEventListener('scroll',this.show)
    var oBox = document.getElementById("box");
    var oLine = document.getElementById("line");
    var b = ""; //声明两个空变量a，b；
    var a = "";
    oLine.onmousedown = function(ev) {
      var iEvent = ev || event;
      var dx = iEvent.clientX; //当你第一次单击的时候，存储x轴的坐标。
      var dy = iEvent.clientY; //当你第一次单击的时候，储存Y轴的坐标。
      var dw = oBox.offsetWidth; //存储默认的div的宽度。
      var dh = oBox.offsetHeight; //存储默认的div的高度。
      var disright = oBox.offsetLeft + oBox.offsetWidth; //存储默认div右边距离屏幕左边的距离。
      var distop = oBox.offsetHeight + oBox.offsetTop; //存储默认div上边距离屏幕左边的距离。
      if (iEvent.clientX < oBox.offsetLeft + 10) {
        //同理
        b = "left";
      }
      document.onmousemove = function(ev) {
        var iEvent = ev || event;
        if (b == "left") {
          oBox.style.width = dw - (iEvent.clientX - dx) + "px"; //iEvent.clientX-dx表示第二次鼠标的X坐标减去第一次鼠标的X坐标，得到绿色移动的距离（为负数），再加上原本的div宽度，就得到新的宽度。
          oBox.style.left = disright - oBox.offsetWidth + "px"; //disright表示盒子右边框距离左边的距离，disright-当前的盒子宽度，就是当前盒子距离左边的距离
          oLine.style.left = disright - oBox.offsetWidth - 25 + "px"; //disright表示盒子右边框距离左边的距/
          if (oBox.offsetWidth <= 10) {
            oBox.style.width = "10px";
            oBox.style.left = disright - oBox.offsetWidth + "px"; //防止抖动
          }
        }
      };
      document.onmouseup = function() {
        document.onmousedown = null;
        document.onmousemove = null;
      };
      return false;
    };
  },
  created() {
    this.getaxios();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fix{
  position: fixed;
  top: 0;
  z-index: 99999;
}
.imgwidth {
  width: 320px;
  margin: 0 auto;
}
.thimg {
  width: 100%;
}
.type {
  color: #333;
  text-decoration: none;
}
.more {
  text-decoration: none;
  color: #333333;
  font-weight: 600;
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
    background: #99a9bf;
  } */
.bg-purple {
  /* background: #d3dce6; */
  /* border: 1px solid #333; */
}
.bg-purple-light {
  /* background: #e5e9f2; */
  /* border: 1px solid #333; */
}
.grid-content {
  line-height: 36px;
  text-align: center;
  /* border-radius: 4px; */
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  /* background-color: #f9fafc; */
  /* border: 1px solid #333; */
}
#box1 {
  width: 100%;
  height: 500px;
  background-image: url(../assets/center2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}

#box {
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(000, 000, 000, 0.1);
  z-index: 999;
}

#line {
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  background-color: #333333;
  text-align: center;
  line-height: 50px;
  color: #e5e9f2;
  left: calc(50% - 25px);
  top: 50%;
  cursor: move;
  z-index: 1000;
}
.verticalcenter {
  margin: auto 0;
}
.proimg {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.proview {
  margin: 0 auto;
  border-radius: 10px;
}
/* .proview:hover{
           box-shadow: 0 0 5px 2px darkgrey;
         transition:  box-shadow 2s ease, transform 2s ease-in 1s;
} */
.gname {
  color: #000;
  font-weight: 600;
}
.gremark {
  /* height: 190px; */
  font-size: 14px;
  color: #333333;
}
.introduce {
  box-shadow: 0 0 5px 2px darkgrey;
}
.routerfont {
  text-decoration: none;
  color: #333333;
}
</style>
