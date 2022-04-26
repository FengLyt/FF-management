<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1','2']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>功能菜单</template>
        <el-menu-item :key="index" :index="menu.url" v-for="(menu,index) in menuList">{{menu.name}}</el-menu-item>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>功能菜单</template>
          <el-menu-item index="/main/alluser">用户管理</el-menu-item>
          <el-menu-item index="2-2">角色管理</el-menu-item>
          <el-menu-item index="2-3">楼栋管理</el-menu-item>
          <el-menu-item index="2-4">宿舍管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

  </el-aside>
</template>

<script>
export default {
  name: 'LeftSide',
  data(){
    return {

      menuList:[]
    }
  },
  methods:{
    getMenu(){
      this.$http.get("/menu").then((resp) => {
        if (resp.data.code == 200) {
          this.menuList = resp.data.data
        }
      })
    }
    },
  mounted() {
    this.getMenu();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.el-aside {
  color: #333;
}
</style>
