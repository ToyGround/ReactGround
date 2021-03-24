import axios from 'axios';
import config from '../config';

const {API, API_KEY} = config;

/**
 * @description createCallAPI 전달값에 따른 api 값 리턴 함수
 * @param {string} kind [gifs, sticker]
 * @param {string} type [search, random, trending]
 * @returns {string}
 * */
const createCallAPI = ({kind, type}) => {
  return type === 'randomid' ? `${API}/${type}?api_key=${API_KEY}` : `${API}/${kind}/${type}?api_key=${API_KEY}`;
};

/**
 * @param {string} kind [gifs, sticker]
 * @param {string} type [search, random, trending]
 * @returns {object}
 * */
export const callAPI = async ({kind, type}) => {
  const api = createCallAPI({kind, type});
  const response = await axios(api);
  return response.data;
};
