import getToken from '../../helpers/token';
import axios from 'axios';

export async function getUsersListApi() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users', { headers: { Authorization: getToken() } });
    return response.json();
  }