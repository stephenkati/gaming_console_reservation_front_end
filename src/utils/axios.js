import axios from 'axios'

const customApi = axios.create({
  baseURL: 'https://gaming-console-reservation.onrender.com'
});

export default customApi;
