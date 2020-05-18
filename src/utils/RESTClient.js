import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {serverUrl} from './hosts';

let instance = axios.create({
	baseURL: serverUrl,
});

instance.interceptors.request.use(
	async config => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			config.headers.Authorization = 'Bearer ' + token;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

export const get = (path, params, config) => {
	return instance.get(path, params, config);
};

export const post = (path, body, config) => {
	return instance.post(path, body || {}, config);
};

export const patch = (path, body, config) => {
	return instance.patch(path, body || {}, config);
};

export const destroy = (path, config) => {
	return instance.delete(path, config);
};
