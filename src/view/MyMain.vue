<template>
    <el-container style="height: 100%; border: 1px  #eee">
      <el-header><TopHeader/></el-header>
      <el-container>
        <el-aside  width="200px"><LeftSide></LeftSide></el-aside>
        <el-main style="height: calc(100vh - 70px)">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import LeftSide from "@/components/LeftSide";
import TopHeader from "@/components/TopHeader";
export default {
  name:"MyMain",
  components: {
    LeftSide,
    TopHeader,


  },

};
</script>
<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: right;
  line-height: 60px;
}
.el-aside {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 200px;
}


</style>