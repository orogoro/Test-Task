import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

async function getWorkies(page) {
  try {
    const { data } = await axios.get(`/users?page=${page}&count=6`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getWorkies };
