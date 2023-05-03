import axios from "axios";
import { BASE_URL } from "./consts";
import { useState } from "react";

export const $axios = axios.create();


$axios.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const config = error.config;
		if (error.response) {
			if (error.response.status === 401 && !config._retry) {
				config._retry = true;
				const access = await refreshAccessToken();
				axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
				return $axios(config);
			}
		}
	}
);

async function refreshAccessToken() {
	try {
		const tokens = JSON.parse(localStorage.getItem("tokens"));
		if (!tokens) {
			return;
		}

		const { data } = await axios.post(`${BASE_URL}/auth/jwt/refresh/`, {
			refresh: tokens.refresh,
		});
		localStorage.setItem({
			access: data.access,
			refresh: tokens.refresh,
		});

		return data.access;
	} catch (error) {
		localStorage.removeItem("tokens");
	}
}

export default $axios