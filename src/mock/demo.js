import Mock  from "mockjs";

// 书刊
// Mock.mock('/call/big','get',{
//     'code':'200',
//     'data':[
//         {
//             url:'http://localhost:8080/static/img/1.a57e7f5d.png',
//             title:'独自一人在大海上',
//             wite:'每本书籍，都被赋予了灵魂！',
//         }
//     ]
// })

// Mock.mock('/call/talk','get',{
    // 'code':'200',
    // 'data':[
    //     {
    //         url:'http://localhost:8080/static/img/1.a57e7f5d.png',
    //         title:'独自一人在大海上'
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/2.82f23c78.png',
    //         title:'完美婚姻'
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/3.f40b028d.png',
    //         title:'13小时'
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/1.a57e7f5d.png',
    //         title:'独自一人在大海上' 
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/2.82f23c78.png',
    //         title:'完美婚姻' 
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/3.f40b028d.png',
    //         title:'13小时'
    //     },
    // ]
    
// })

// Mock.mock('/call/gengduo','get',{
    // 'code':'200',
    // 'data':[
    //     {
    //         url:'http://localhost:8080/static/img/1.a57e7f5d.png',
    //         title:'独自一人在大海上',
    //         wite:"亞瑟即將要跟同在孤兒院的姊姊凱蒂分開，被送世界的另一邊去了。"
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/2.82f23c78.png',
    //         title:'完美婚姻',
    //         wite:'杰克和爱丽丝在新婚之日收到一份神秘礼物，来自契约组织的邀请'
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/3.f40b028d.png',
    //         title:'13小时',
    //         wite:'故事一開始，探員班尼原以為只是單純調查一宗謀殺案，不料，才'
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/1.a57e7f5d.png',
    //         title:'独自一人在大海上',
    //         wite:"亞瑟即將要跟同在孤兒院的姊姊凱蒂分開，被送世界的另一邊去了。"
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/2.82f23c78.png',
    //         title:'完美婚姻',
    //         wite:'杰克和爱丽丝在新婚之日收到一份神秘礼物，来自契约组织的邀请'
    //     },
    //     {
    //         url:'http://localhost:8080/static/img/3.f40b028d.png',
    //         title:'13小时',
    //         wite:'故事一開始，探員班尼原以為只是單純調查一宗謀殺案，不料，才'
    //     }
    // ]
// })


// 视频
// Mock.mock('/call/shipin','get',{
//     'code':'200',
//     'data':[
//         {
//             name:'初升高衔接，英语在线课程',
//             title:'165人学习中',
//             wite:'名师讲堂，在线语法讲解，快速掌握英语难点，重点',
//             btn:'英语',
//             btn1:'初中'
//         },
//         {
//             name:'初升高衔接，英语在线课程',
//             title:'165人学习中',
//             wite:'名师讲堂，在线语法讲解，快速掌握英语难点，重点',
//             btn:'英语',
//             btn1:'初中'
//         },
//         {
//             name:'初升高衔接，英语在线课程',
//             title:'165人学习中',
//             wite:'名师讲堂，在线语法讲解，快速掌握英语难点，重点',
//             btn:'英语',
//             btn1:'初中'
//         },
//         {
//             name:'初升高衔接，英语在线课程',
//             title:'165人学习中',
//             wite:'名师讲堂，在线语法讲解，快速掌握英语难点，重点',
//             btn:'英语',
//             btn1:'初中'
//         },

//     ]
// })

// 音频
// Mock.mock('/call/yinpin','get',{
//     'code':'200',
//     'data':[
//         {
//             name:'初升高衔接，英语在线听力训练',
//             title:'5分钟试听版'
//         },
//         {
//             name:'初升高衔接，英语在线听力训练',
//             title:'5分钟试听版'
//         },
//         {
//             name:'初升高衔接，英语在线听力训练',
//             title:'5分钟试听版'
//         },
//         {
//             name:'初升高衔接，英语在线听力训练',
//             title:'5分钟试听版'
//         },
//         {
//             name:'初升高衔接，英语在线听力训练',
//             title:'5分钟试听版'
//         },
//         {
//             name:'初升高衔接，英语在线听力训练',
//             title:'5分钟试听版',
//             // src:'http://localhost:8080/static/img/xuanzhuan.58b56dad.png'
//         },
//     ]
// })

// 家教
// Mock.mock('/call/jj','get',{
//     'code':'200',
//     'data':[
//         {
//             url:'http://localhost:8080/static/img/ditu.7c66029a.png',
//             name:'523m',
//             username:'范某某',
//             title:'黄冈第四高级中学特级教师',
//             wite:'家教课程：高数',
//             btn:'查看'
//         },
//         {
//             url:'http://localhost:8080/static/img/ditu.7c66029a.png',
//             name:'523m',
//             username:'范某某',
//             title:'黄冈第四高级中学特级教师',
//             wite:'家教课程：高数',
//             btn:'查看'
//         },  
//         {
//             url:'http://localhost:8080/static/img/ditu.7c66029a.png',
//             name:'523m',
//             username:'范某某',
//             title:'黄冈第四高级中学特级教师',
//             wite:'家教课程：高数',
//             btn:'查看'
//         }, 
//     ]
// })