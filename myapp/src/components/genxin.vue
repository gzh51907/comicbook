<template>
  <el-container>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="day in date"
        :key="day.name"
        :label="day.label"
        :name="day.name"
        type="card"
      ><el-row :gutter="20">
           <el-col :span="8"
            v-for="item in daybook[day.name].info" 
            :key="item.comic_id" 
            style="height:150px"
            @click.native="goto(item.comic_id)">
            <el-image
                style="width:100%"
                :src="item.feature_img"
                fit="contain"></el-image>
                <p>
                <span>{{item.comic_name}}</span>
                </p>
            </el-col>
</el-row>
</el-tab-pane>
    </el-tabs>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeName:new Date().getDay()+"",
      date: [
        {
          label: "周日",
          name: "0"
        },
        {
          label: "周一",
          name: "1"
        },
        {
          label: "周二",
          name: "2"
        },
        {
          label: "周三",
          name: "3"
        },
        {
          label: "周四",
          name: "4"
        },
        {
          label: "周五",
          name: "5"
        },
        {
          label: "周六",
          name: "6"
        }
      ],
      daybook:[]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    goto(){
        
    }
  },
  async created() {
    let {data} = await this.$axios.get("https://m.manhuatai.com/api/updatelist/",{
        params:{
    product_id:"2",
    productname:"mht",
    platformname:"wap"
        }
    });
    this.daybook=data.data.update;
    console.log(this.daybook)
  }
};
</script>
<style lang="scss" scoped>
* {
    padding:0;
    margin:0
}
</style>