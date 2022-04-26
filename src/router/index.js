import MyLogin from "@/view/MyLogin";
import VueRouter from "vue-router";
import MyMain from "@/view/MyMain";
import UserList from "@/view/user/UserList";
import RoleList from "@/view/role/RoleList";
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
                    name:"UserList",
                    path:"/main/",
                    component:UserList
                },
                {
                    name:"UserList",
                    path:"/main/alluser",
                    component:UserList
                },{
                    name:"RoleList",
                    path:"/main/role",
                    component:RoleList
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