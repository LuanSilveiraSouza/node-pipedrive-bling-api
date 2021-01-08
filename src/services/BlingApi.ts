import axios from 'axios';

const BlingApi = axios.create({
	baseURL: process.env.BLING_URL,
});

export default BlingApi;