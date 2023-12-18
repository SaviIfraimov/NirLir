import axios from 'axios';

export const api = axios.create({
  baseURL: '', //example: 'https://www.balldontlie.io/api/v1'
});