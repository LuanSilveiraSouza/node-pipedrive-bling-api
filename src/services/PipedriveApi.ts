import axios from 'axios';

const PipedriveApi = axios.create({
	baseURL: process.env.PIPEDRIVE_URL,
});

export default PipedriveApi;
