<template>
  <div class="">
    <div style="display: flex">
      <el-input v-model="username" placeholder="用户姓名" style="width: 200px"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="Search(currentPage,PageSize,username)">搜索</el-button>
      <el-button type="primary" @click="AddShow()" style="margin-left: 900px ">新增</el-button>
    </div>
    <el-table
        :data="tableData"
        border
        style="width: 100%"
    >
      <el-table-column
          prop="id"
          label="id">
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称">
      </el-table-column>
      <el-table-column
          prop="info"
          label="介绍">
      </el-table-column>
      <el-table-column
          prop="userid"
          label="操作人">
      </el-table-column>
      <el-table-column prop="opera_time" :formatter="getDate" label="日期"></el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle @click="EditorShow(scope.row.id)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteUser(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        background
        :page-sizes="[5,10]"
        :page-size="PageSize"
        layout="total,sizes,prev, pager, next,jumper"
        :total=total>
    </el-pagination>
    <AddUser ref="AddUser"></AddUser>
    <update-user ref="UpdateUser"></update-user>
  </div>

</template>
<script>
import AddUser from "@/view/user/AddUser";
import UpdateUser from "@/view/user/UpdateUser";

export default {
  name: "RoleList",
  components: {
    AddUser,
    UpdateUser
  },
  data() {

    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 0, // 总条数
      PageSize: 5,// 每页的数据条数,
      username: ''
    }
  },
  methods: {
    handleSizeChange(val) {
      this.PageSize = val
      this.getData(val, this.currentPage)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getData(this.PageSize, val)
    },
    deleteUser(id) {
      this.$confirm("确定要删除吗", "提示").then(() => {
        this.$http.delete("admin/user/deleteUser?id=" + id).then(resp => {
          if (resp.data.code == 200) {
            this.$message.success("删除成功");
            this.$router.go();
          } else {
            this.$message.error("删除失败");
          }
        })
      })

    },

    getData(pagesize, currentpage) {
      this.$http.get("admin/role/allrole?PageSize=" + pagesize + "&currentPage=" + currentpage
      ).then(resp => {
        console.log(resp.data)
        this.tableData = resp.data.data.records
        this.total = resp.data.total
      })
    },
    EditorShow(id) {
      this.$refs.UpdateUser.form.id = id;
      this.$refs.UpdateUser.getData(id);
      this.$refs.UpdateUser.dialogFormVisible = true;
    },
    AddShow() {
      this.$refs.AddUser.dialogFormVisible = true;
    },
    Search(currentpage, pagesize, username) {
      this.$http.get("admin/user/UserAsAccount?username=" + username + "&PageSize=" + pagesize + "&currentPage=" + currentpage
      ).then(resp => {
        this.tableData = resp.data.records
        this.total = resp.data.total
      })
    },
    getDate(row, column, cellValue) {
      var date = new Date(cellValue);
      return date.toLocaleString();
    }

  },
  created: function () {
    this.getData(this.PageSize, this.currentPage)
  }
}
</script>

<style scoped>

</style>