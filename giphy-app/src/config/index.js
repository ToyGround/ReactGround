import dotenv from 'dotenv';

dotenv.config();

export default {
  API    : process.env.REACT_APP_API,
  API_KEY: process.env.REACT_APP_API_KEY
};