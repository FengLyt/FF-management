<template>
  <div id="app">
    <div class="login_container"  >
      <!-- 登录盒子-->
      <div class="login_box">
        <!-- 头像盒子-->
        <div class="img_box">
          <img src="../assets/logo.png" />
        </div>
        <el-form :model="form" label-width="80px" style="padding-top: 120px; margin-right: 35px;">
          <el-form-item label="账号">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" show-password @keydown.enter="login()"></el-input>
          </el-form-item>
          <el-row style="margin-left: 50px;">
            <el-button type="primary" plain  v-on:click = "login()" >登录</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLogin",
  data(){
    return{
      form : {
        account:"",
        password:""
      },
      tips: false ,
      UserName:''

    }
  },
  methods:{

    login(){
      var ThisA=this;
        this.$http.post("/login",this.form).then(function (resp){
          if (resp.data.code==200){
            //登陆成功
            window.sessionStorage.setItem("token",resp.data.data.token)
            window.sessionStorage.setItem("username",resp.data.data.account)
            ThisA.$router.push("/main")
            ThisA.$message.success("登陆成功")
          }else {
              ThisA.$message.error(resp.data.message,'提示')
          }


        })
    }
  }
}


</script>

<style >
html,body,#app,.login_container{
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.login_container{
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 33%, #FFCC70 100%);

;
}

.login_box{
  width: 450px;
  height: 350px;
  background-color: rgba(255,255,255,0.5);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.img_box{
  width: 130px;
  height: 130px;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,0.1);
  border-radius: 50%;
  padding: 5px;
  border: 1px solid #eee;
}

.img_box img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
</style>