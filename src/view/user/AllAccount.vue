<template>

    <div>

      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="id"
            label="id"
            width="180">
        </el-table-column>
        <el-table-column
            prop="account"
            label="account"
            width="180">
        </el-table-column>
        <el-table-column
            prop="password"
            label="password">
        </el-table-column>
      </el-table>
    </div>

</template>

<script>
export default {
  name: "AllAccount",
  data(){
    return{
      tableData:[]
    }
  },
  methods:{
    getData(){
        this.$http.post("admin/user/all").then(resp=>{
          this.tableData=resp.data
        })
    }
  },
  created:function(){
    this.getData()
  }

}
</script>

<style >

</style>