// 云函数入口文件
const cloud = require('wx-server-sdk')
let axios=require("axios");
let httpUrl="https://api.apiopen.top/getJoke";


cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let result=await axios.get(httpUrl,{params:event})
  return result.data;
}