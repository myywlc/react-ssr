import { CHANGE_LIST_Translation } from './constants';

const changeList = (data) => ({
  type: CHANGE_LIST_Translation,
  data
});

export const getBList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api')
    .then((res) => {
      if (res) {
        const data = res.data.text;
        console.log(data, 'data');
        dispatch(changeList(data))
      } else {
        const data = '';
        dispatch(changeList(data))
      }
    })
  }
} 
