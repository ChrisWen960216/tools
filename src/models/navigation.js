
import { getNavigationList } from '../services/navigation';

export default {
  namespace: 'navigation',
  state: {
    loading: false,
    navigation: [],
  },
  effects: {
    * getNavigation(action, { call, put }) {
      yield put({ type: 'save', payload: { loading: true } });
      const [error, navigation] = yield call(getNavigationList);
      if (!error) { yield put({ type: 'save', navigation }); }
      return yield put({ type: 'save', payload: { loading: false } });
    },
  },

  reducers: {
    save(state, payload) {
      return { ...state, ...payload };
    },
  },

};
