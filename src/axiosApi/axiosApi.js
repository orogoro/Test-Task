import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

async function getToken() {
  try {
    const { data } = await axios.get(`/token`);
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
