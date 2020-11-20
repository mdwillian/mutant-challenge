import axios from 'axios';

const ApiJsonPlaceHolder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default ApiJsonPlaceHolder;
