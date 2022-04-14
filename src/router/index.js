import MyLogin from "@/view/MyLogin";
import VueRouter from "vue-router";
import MyMain from "@/view/MyMain";
import UserMessage from "@/view/user/UserMessage";
import AccountMessage from "@/view/user/AccountMessage";
import AllAccount from "@/view/user/AllAccount";
import UserManagement from "@/view/user/UserManagement";
import Vue from "vue";
Vue.use(VueRouter)
var router =new VueRouter({
    mode:"history",
    routes:[
        {
            name:"login",
            path:"/",
            component:MyLogin
        },{
            name:"login",
            path:"/login",
            component:MyLogin
        },
        {
            name:"MyMain",
            path:"/main",
            component:MyMain,
            children:[
                {
                    name:"UserMessage",
                    path:"/main/",
                    component:UserMessage
                },
                {
                    name:"account",
                    path:"/main/account",
                    component:AccountMessage
                },
                {
                    name:"AllUser",
                    path:"/main/Alluser",
                    component:AllAccount
                },{
                    name:"UserManagement",
                    path:"/main/UserManagement",
                    component:UserManagement
                }
            ]
        },

    ],

})
router.beforeEach((to,from,next)=>{
    if(to.path=='/login'){ //如果用户访问的登录页，直接放行
        return next();
    }else{
        var token = window.sessionStorage.getItem("token");
        if(token==null){
            return next("/login");
        }else{
            next();
        }
    }
})


export default router