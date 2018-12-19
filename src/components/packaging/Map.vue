<template>
  <div id="app">
    <div id="allmap" ref="allmap"></div>
  </div>
</template>
 
<script>
export default {
  name: 'App',
  methods:{
    map(){
      let map =new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(119.30462,26.081467), 11);// 初始化地图,设置中心点坐标和地图级别
      var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
      var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
      // var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
      /*缩放控件type有四种类型:
      BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
      map.addControl(new BMap.MapTypeControl({//添加地图类型控件
        mapTypes:[
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]}));
      map.setCurrentCity("福州市");// 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      //添加控件和比例尺
      map.addControl(top_left_control);        
      map.addControl(top_left_navigation);     
      // map.addControl(top_right_navigation);   
      setTimeout(function(){
        map.enableDragging();   //两秒后开启拖拽
        //map.enableInertialDragging();   //两秒后开启惯性拖拽
      }, 2000);
    }
 
  },
  mounted(){
    this.map()
  }
}
</script>
 
<style>
#allmap{
  width: 100%;
  height: 700px;
  overflow: hidden;
  margin: 20px auto;
}
</style>