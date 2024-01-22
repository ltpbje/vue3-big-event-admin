import request from '@/utils/request.js'
export const useRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })
