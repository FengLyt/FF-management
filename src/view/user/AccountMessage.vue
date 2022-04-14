<template>

  <div class="">
    <el-table :data="tableData" class="table" height="80vh" >
      <el-table-column prop="id" label="id" width="140">
      </el-table-column>
      <el-table-column prop="account" label="account" width="120">
      </el-table-column>
      <el-table-column prop="password" label="password">
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        background
        :page-sizes="[1,5,10,20,40]"
        :page-size="PageSize"
        layout="sizes,prev, pager, next,jumper,total"
        :total=total>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "AccountMessage",
  data(){
    return{
      currentPage:1,
      PageSize:5,
      total:0,
      tableData:[]
    }
  },
  methods:{
      handleSizeChange(val) {
        this.PageSize=val
        this.getData(val,this.currentPage)

      },
    handleCurrentChange(val){
        this.currentPage=val
      this.getData(this.PageSize,val)
    },
    getData(pagesize,currentpage){
        this.$http.get("admin/user/asPage?PageSize="+pagesize+"&currentPage="+currentpage
        ).then(resp=>{
          this.tableData=resp.data.records
          this.total=resp.data.total
        })
    },
  },
  created:function(){
    this.getData(this.PageSize,this.currentPage)
  }
}
</script>

<style scoped>
  .table{
    height: 80vh;
  }
</style>