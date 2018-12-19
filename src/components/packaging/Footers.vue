<template>
  <div id="app">
    <!-- 页脚 -->
   <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark footer" >
         <div class="shopinfo">
            <p>{{$t('message.companyaddress')}}：{{msg.address}}</p>
            <p>{{$t('message.phone')}}：{{msg.phone}}</p>
            <p>{{$t('message.fax')}}：{{msg.fax}}</p>
            <p>{{$t('message.postcode')}}：{{msg.postcode}}</p>
            <p>{{$t('message.url')}}：{{msg.url}}</p>
            <p>{{$t('message.email')}}：{{msg.mail}}</p>
            <img width="100px" height="100px" src="../../assets/ewm.png" alt="">
            <!-- <img :src="'http://fyd.meilashidai.net' + msg.erweima" alt="ewm"> -->
            <p>{{$t('message.wxgzh')}}</p>
         </div>
         <div class="fff">{{$t('message.bqsy')}} </div>
        </div>
      </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
        msg: []
      }
  },
  created (){
    var $this = this;
    $this.$ajax.get('http://fyd.meilashidai.net/home/Index/shopInfo')
    .then((res) => {
      // console.log(res); 
      $this.msg = res.data.msg;
    }).catch((err) => {
      console.log(err);
    });
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
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    line-height: 36px;
    /* text-align: center; */
    /* border-radius: 4px; */
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .footer{
    /* display: flex;
    align-items: center; */
    width: 100%;
    /* height: 500px; */
    background-image: url(../../assets/footer.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .shopinfo{
    width: 1200px;
    margin: 0 auto;
    color: #fff;
    padding: 30px 0;
  }
  .shopinfo p{
    color: #fff;
    margin: 5px 0;
    padding: 0;
    font-family: MicrosoftYaHei;
    font-weight: Regular;
    font-size: 15px;
  }
  .fff{
    color: #fff;
    text-align: center;
    font-size: 13px;
  }
</style>
