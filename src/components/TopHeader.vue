<template>
  <div>
    <el-dropdown trigger="click">
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>密码修改</el-dropdown-item>
        <el-dropdown-item>
          <el-button type="text" @click="logout()">安全退出</el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>{{name}}</span>
  </div>

</template>

<script>
import router from "@/router";

export default {
  name: "TopHeader",
  data(){
    return{
      name: window.sessionStorage.getItem("username")
    }
  },
  methods:{
    logout(){
      this.$confirm("您确认退出吗？",'提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>(
      window.sessionStorage.removeItem("token"),
      this.$message({
        type:'success',
        message:"退出成功"
      }),
      router.push("/login")
      )
      )
    },

  }
}
</script>

<style >

</style>