/*
  2022年2月21日17:45:50
 */
import axios from 'axios'

// 创建一个实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 50000
})

// 请求拦截器
service.interceptors.request.use()
