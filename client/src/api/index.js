//Axios shows how to generage requests in JavaScript using Axios client library
import axios from 'axios';

const url='http://localhost:5000/posts';

export const fetchPost = () => axios.get(url);  // we send a GET request