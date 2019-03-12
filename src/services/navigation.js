import request from '../utils/request';

export function getNavigationList() {
  return request('/mock/navigation_list');
}

export function updateNavigationList() {}
