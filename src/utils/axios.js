import axios from 'axios'

const customApi = axios.create({
  baseURL: 'http://localhost:3000'
});

export default customApi;
