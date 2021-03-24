import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line
export default {
  API    : process.env.REACT_APP_API,
  API_KEY: process.env.REACT_APP_API_KEY,
  LOGO   : process.env.REACT_APP_LOGO,
  KIND   : {
    GIFS   : 'gifs',
    STICKER: 'sticker'
  },
  TYPE   : {
    SEARCH  : 'search',
    RANDOM  : 'randomid',
    TRENDING: 'trending',
    CATEGORY: 'categories'
  }
};