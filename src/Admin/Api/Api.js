import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://photo.azurecloud.vn/api/v1/',
  headers: {
    'Authorization': 'Bearer '+ localStorage.token
  }
});

export default Api;