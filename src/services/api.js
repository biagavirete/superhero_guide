import axios from 'axios';

const api = axios.create({
  baseURL: 'https://superheroapi.com/api/10159142286944414'
})

export default api;