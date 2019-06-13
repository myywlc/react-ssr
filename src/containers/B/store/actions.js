import { CHANGE_LIST_Translation } from './constants';

const changeList = (data) => ({
  type: CHANGE_LIST_Translation,
  data
});

export const getBList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api')
    .then((res) => {
      if (res.data.success) {
        const data = res.data;
        dispatch(changeList(data))
      } else {
        const data = '';
        dispatch(changeList(data))
      }
    })
  }
} 
