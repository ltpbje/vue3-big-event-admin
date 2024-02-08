import request from '@/utils/request'
// 获取分类列表数据
export const artGetChannelList = () => request.get('/my/cate/list')
// 添加文章分类
export const artAddChannelService = (data) => request.post('/my/cate/add', data)
// 编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)

//删除文章分类
export const artDelChannelService = (id) => {
  return request.delete(`/my/cate/del`, {
    params: { id }
  })
}
// 获取文章列表
export const artGetChannelsService = () =>
  request.get('/my/article/list', {
    params: {}
  })
