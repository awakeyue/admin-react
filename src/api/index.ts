import request from '@/utils/request'

export const getList = () => {
  return request({
    url: '/api/list',
    method: 'get',
  })
}
