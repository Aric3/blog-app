import request from '@/request'

export function getAllcategories() {
  return request({
    url: '/categories',
    method: 'get',
  })
}

export function getAllcategoriesDetail() {
  return request({
    url: '/categories/detail',
    method: 'get',
  })
}

export function getCategory(id) {
  return request({
    url: `/categoies/${id}`,
    method: 'get',
  })
}

export function getCategoryDetail(id) {
  return request({
    url: `/categories/detail/${id}`,
    method: 'get',
  })
}
