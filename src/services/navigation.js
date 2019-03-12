import request from '../utils/request';
import { getENV } from '../utils/env';

export function getNavigationList() {
  return request(`/${getENV()}/navigation_list`);
}

export function updateNavigationList() {}
