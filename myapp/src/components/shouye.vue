<template>
  <div>
    <div class="block">
      <el-carousel>
        <el-carousel-item v-for="item in lunbo" :key="item.title">
          <el-image style="width:100%" :src="item.img" fit="cover"></el-image>
          <h5 class="small">{{ item.title }}</h5>
          <div>{{item.recommend}}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbo: [
        {
          title: "最强妖孽",
          img: require("../assets/lunbo4.png"),
          recommend: "异界大仙附身笨蛋学生"
        },
        {
          title: "极品战兵在都市",
          img: require("../assets/lunbo2.png"),
          recommend: "兵王洛羽激战各方英豪"
        },
        {
          title: "逆转仙途",
          img: require("../assets/lunbo3.png"),
          recommend: "重生再破十年轮回！"
        },
        {
          title: "给我闭嘴！",
          img: require("../assets/lunbo1.png"),
          recommend: "我怎么就管不住这张破嘴？！"
        }
      ]
    };
  }
};
</script>
<style  scoped>
* {
  padding: 0;
  margin: 0;
}
</style>