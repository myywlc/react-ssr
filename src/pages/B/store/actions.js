import { CHANGE_DATA } from './constants';

const changeList = data => ({
  type: CHANGE_DATA,
  data,
});

export const getBList = () => (dispatch, getState, axiosInstance) =>
  axiosInstance.get('/api').then(res => {
    if (res) {
      const data = res.data.text;
      console.log(data, 'data');
      dispatch(changeList(data));
    } else {
      const data = '';
      dispatch(changeList(data));
    }
  });
