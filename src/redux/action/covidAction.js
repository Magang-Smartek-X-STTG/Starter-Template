import axios from "axios";

export const getDataCovid = () => (dispatch) => {
  axios
    .get(`https://covid.mathdro.id/api`)
    .then((res) => {
      dispatch({type: 'SET_DATA_COVID', value: res.data})
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};
