import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Token = token;
//   },
//   // unset() {
//   //   axios.defaults.headers.common.Authorization = '';
//   // },
// };

async function getToken() {
  try {
    const { data } = await axios.get(`/token`);
    // token.set(data.token);
    return data.token;
  } catch (error) {
    console.log(error);
  }
}

async function getPositions() {
  try {
    const { data } = await axios.get(`/positions`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getWorkies(page) {
  try {
    const { data } = await axios.get(`/users?page=${page}&count=6`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function postWorkies(body, config) {
  try {
    const { data } = await axios.post('/users', body, config);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getWorkies, postWorkies, getToken, getPositions };
