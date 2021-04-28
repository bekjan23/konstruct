import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://konstruct-2b2d4-default-rtdb.firebaseio.com'
});

export default instance;