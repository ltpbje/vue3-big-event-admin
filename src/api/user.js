import request from '@/utils/request.js'
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })
export const getUserInfoService = () => request.get('/my/userinfo')

// 更新用户基本资料接口
export const userUpdateInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })
