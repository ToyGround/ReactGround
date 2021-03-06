import dotenv from 'dotenv';

dotenv.config();

export default {
  URL    : process.env.REACT_APP_URL,
  API_KEY: process.env.REACT_APP_API_KEY
};