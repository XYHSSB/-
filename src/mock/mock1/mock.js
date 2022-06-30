// 引入mockjs
import Mock from 'mockjs'

// 定义课程内容
const curriculumModule = [
    {
       curriculumId:"001",
       curriculumDate:"4月1日",
       curriculumTime:"14:00 - 17:00",
       curriculumPhoto:require("../../assets/2.png"),
       curriculumDescribe:"高数-微积分,线性代数基础课",
    },
    {
       curriculumId:"002",
       curriculumDate:"4月2日",
       curriculumTime:"14:00 - 17:00",
       curriculumPhoto:require("../../assets/2.png"),
       curriculumDescribe:"高数-微积分,线性代数基础课",
    },
    {
       curriculumId:"003",
       curriculumDate:"4月3日",
       curriculumTime:"14:00 - 17:00",
       curriculumPhoto:require("../../assets/2.png"),
       curriculumDescribe:"高数-微积分,线性代数基础课",
    },
    {
       curriculumId:"004",
       curriculumDate:"4月4日",
       curriculumTime:"14:00 - 17:00",
       curriculumPhoto:require("../../assets/2.png"), 
       curriculumDescribe:"高数-微积分,线性代数基础课",
    },
]


//  定义家教内容
const educationModule = [
   {
      educationId:"001",
      educationHead:"#icon-iconzhucetouxiang",
      educationName:"范老师",
      educationNews:"#icon-xiaoxi",
      educationSubjects:"初中、高中数学",
      educationSubscribe:"4月5日 13:00",
   },{
      educationId:"002",
      educationHead:"#icon-avatar09",
      educationName:"李老师",
      educationNews:"#icon-xiaoxi",
      educationSubjects:"初中、高中数学",
      educationSubscribe:"4月6日 13:00",
   },{
      educationId:"003",
      educationHead:"#icon-08",
      educationName:"赵老师",
      educationNews:"#icon-xiaoxi",
      educationSubjects:"初中、高中数学",
      educationSubscribe:"4月7日 13:00",
   },{
      educationId:"004",
      educationHead:"#icon-05",
      educationName:"王老师",
      educationNews:"#icon-xiaoxi",
      educationSubjects:"初中、高中数学",
      educationSubscribe:"4月8日 13:00",
   },
]


// 定义已购内容
const payMoudule = [
   {
     payId:"001",
     payPhoto:require("../../assets/2.png"),
     payDescribe:"从零开始学摄影-最佳在线专业摄影课",
     payScore:"评分：8.7"
   }
   ,
   {
     payId:"002",
     payPhoto:require("../../assets/2.png"),
     payDescribe:"从零开始学摄影-最佳在线专业摄影课",
     payScore:"评分：8.3"
   }
   ,
   {
     payId:"003",
     payPhoto:require("../../assets/2.png"),
     payDescribe:"从零开始学摄影-最佳在线专业摄影课",
     payScore:"评分：8.9"
   }
   ,
   {
     payId:"003",
     payPhoto:require("../../assets/2.png"),
     payDescribe:"从零开始学摄影-最佳在线专业摄影课",
     payScore:"评分：7.9"
   }
]


// 定义遮罩层数据
const courseList = [
   {
     courseDate:"4月1日",
     lists:[
       {
         courseTime:"14 : 00 - 17 : 00",
         coursePhoto:require("../../assets/2.png"),
         courseDescribe:"高数-微积分,线性代数基础课",
       },
       {
         courseTime:"18 : 00 - 21 : 00",
         coursePhoto:require("../../assets/2.png"),
         courseDescribe:"高数-微积分,线性代数基础课",
       }
     ]
   },
   {
     courseDate:"4月2日",
     lists:[
       {
         courseTime:"14 : 00 - 17 : 00",
         coursePhoto:require("../../assets/2.png"),
         courseDescribe:"高数-微积分,线性代数基础课",
       },
       {
         courseTime:"18 : 00 - 21 : 00",
         coursePhoto:require("../../assets/2.png"),
         courseDescribe:"高数-微积分,线性代数基础课",
       }
     ]
   },
   {
     courseDate:"4月3日",
     lists:[
       {
         courseTime:"14 : 00 - 17 : 00",
         coursePhoto:require("../../assets/2.png"),
         courseDescribe:"高数-微积分,线性代数基础课",
       },
       {
         courseTime:"18 : 00 - 21 : 00",
         coursePhoto:require("../../assets/2.png"),
         courseDescribe:"高数-微积分,线性代数基础课",
       }
     ]
   },
   {
     courseDate:"4月4日",
     lists:[
       {
         courseTime:"14 : 00 - 17 : 00",
         coursePhoto:require("../../assets/2.png"),
         courseDescribe:"高数-微积分,线性代数基础课",
       },
       {
         courseTime:"18 : 00 - 21 : 00",
         coursePhoto:require("../../assets/2.png"),
         courseDescribe:"高数-微积分,线性代数基础课",
       }
     ]
   }
 ]


//  获取课程数据
Mock.mock("/curriculum" , "get" , ()=>{
    return curriculumModule
})


//  获取家教数据
Mock.mock("/ceducation" , "get" , ()=>{
   return educationModule
})

//  获取已购数据
Mock.mock("/pay" , "get" , ()=>{
   return payMoudule
})

//  获取遮罩层数据
Mock.mock("/courseList" , "get" , ()=>{
   return courseList
})