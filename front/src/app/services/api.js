import axios from 'axios';

const hosts = [
  'https://o7bz8h3y1a.execute-api.us-east-1.amazonaws.com/',//'http://localhost:9999', // * localhost development address
  'http://localhost:9999', // * OCI api host address
]

export default axios.create({
  baseURL: hosts[0],
});