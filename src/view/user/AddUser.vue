<template>
  <div>
    <el-dialog title="用户管理" :visible.sync="dialogFormVisible" width="400px">
      <el-form label-position="right" label-width="80px" :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio v-model="form.gender" label="男"></el-radio>
          <el-radio v-model="form.gender" label="女"></el-radio>
        </el-form-item>
        <el-form-item label="部门" prop="dept">
          <el-select v-model="form.dept.id" >
            <el-option
                v-for="dept in DeptList"
                :key="dept.id"
                :label="dept.name"
                :value="dept.id"
                >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-checkbox-group v-model="form.role">
            <el-checkbox v-for="role in RoleList"
                          :key="role.id"
                         :label="role.id"
                          >
              {{role.name}}
            </el-checkbox>

          </el-checkbox-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm') " >保存</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name:'AddUser',
  data() {
    return {
      dialogFormVisible: false,
      form: {
        account: '',
        phone: '',
        gender:'男',
        dept:{
          id:''
        },
        role:[]
      },
      DeptList:[],
      RoleList: [],
      //验证规则
      rules: {
        account: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min:2, max: 8, message: '请输入正确的姓名格式', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入正确的手机号', trigger: 'change' },
          {pattern: /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/ ,message: '请输入正确的手机号',trigger: 'change'}
        ],
        gender:[
          { required: true, message: '请选择性别', trigger: 'blur' },
        ],
        dept:[
          { required: true, message: '请选择部门', trigger: 'change' },
        ],
        role:[
          { required: true, message: '请选择角色', trigger: 'change' },
        ],
      }

    };
  },
  methods:{
    UserSave(){
      this.$http.post("/admin/user/adduser",this.form).then(resp=>{
        if (resp.data.code==200){
          this.$message.success(resp.data.message);
          this.dialogFormVisible=false;
          this.$router.go();
        }else{
          this.$message.error("添加失败");
          this.dialogFormVisible=false;

        }

      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.UserSave();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getRoleList(){
        this.$http.get("/admin/user/getRoleList").then(resp=>{
          this.RoleList=resp.data;
          console.log(resp)
        })
    },
    getDeptList(){
      this.$http.get("/admin/user/getDeptList").then(resp=>{
        this.DeptList=resp.data;
        console.log(resp)
      })
    }
  },
  created() {
     this.getRoleList();
     this.getDeptList();
  }
};
</script>

<style >

</style>