// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let result={
        "status":'',
        "data":''
    }
    result.data = await cloud.database().collection('goods').get()
    if(result.data){
        result.status="success"
        return result
    }else{
        result.status="error"
        return result
    }
}