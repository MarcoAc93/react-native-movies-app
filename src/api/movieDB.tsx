import axios from 'axios';

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: { api_key: '3e3513699db5de222560c050f4d8af0b' }
});

export default movieDB;
