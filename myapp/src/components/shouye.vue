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
    <div v-for="bookclass in book" :key="bookclass.title">
      <h2>{{bookclass.title}}</h2>
      <el-row :gutter="20">
        <el-col
          :span="8"
          v-for="item in bookclass.comic_info"
          :key="item.comic_id"
          style="height:200px"
          @click.native="goto(item.comic_id)"
        >
          <el-image style="width:100%" :src="lunbo[1].img" fit="cover"></el-image>
          <h5>{{item.comic_name}}</h5>
          <p>
            <span>{{item.content}}</span>
          </p>
        </el-col>
      </el-row>
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
      ],
      book: []
    };
  },
  async created() {
    //发起ajax请求
    let { data } = await this.$axios.get(
      "https://m.manhuatai.com/api/getBookByType",
      {
        params: {
          product_id: 2,
          productname: "mht",
          platformname: "wap",
          pagesize: 5,
          page: 2,
          pytype: "tuijian",
          booktype: 132
        }
      }
    );
    this.book = data.data.book;
    console.log(this.book);
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
p {
  span {
    font-size: 14px;
  }
}
</style>