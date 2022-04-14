<template>
  <div class="">
    <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" class="a123" >
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <el-pagination

        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        background
        :page-sizes="[1,5,10,20]"
        :page-size="pageSize"
        layout="total,sizes,prev, pager, next,jumper"
      :total="tableData.length">

    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "UserMessage",
  data() {
    const item = [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1508 弄'
    },{
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1508 弄'
    },{
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1508 弄'
    },{
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1508 弄'
    },{
      date: '2016-05-05',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1508 弄'
    },{
      date: '2016-05-06',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1508 弄'
    },{
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1508 弄'
    },{
      date: '2016-05-08',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1508 弄'
    },
    ]

    return {
      tableData: item,
      currentPage:1, // 当前页码
      total: 20, // 总条数
      pageSize: 5 // 每页的数据条数
    }
  },
  methods: {
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  }

}
</script>

<style >
.a123{
height: 80vh;
}
</style>