import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ACTIONS, BASE_URL } from "../utils/consts";
import axios from "axios";
import $axios from "../utils/axios";
import { Navigate } from "react-router-dom";

const authContext = createContext();

export function useAuthContext() {
	return useContext(authContext);
}

// const initialState = {
// 	user: null,
// };

// function reducer(state, action) {
// 	switch (action.type) {
// 		case ACTIONS.user:
// 			return { ...state, user: action.payload };

// 		default:
// 			return state;
// 	}
// }

function AuthContext({ children }) {
	// const [state, dispatch] = useReducer(reducer, initialState);
	const [ user, setUser ] = useState(null)

	async function register(credentials) {
		try {
			let res = await axios.post(`${BASE_URL}/auth/user/`, credentials);
			console.log(res)
		} catch (error) {
			console.log(error.response.data, 'regiser error');
		}
	}

	async function logIn(credentials) {
		try {
			const { data: tokens } = await axios.post(
				`${BASE_URL}/auth/jwt/create/`,
				credentials
			);
			localStorage.setItem("tokens", JSON.stringify(tokens));
			const token = JSON.parse(localStorage.getItem("tokens"));
			const { data } = await axios.get(`${BASE_URL}/auth/user/me`, {
				headers: {
					'Authorization': `Token ${token.access}`
				}
			});
			setUser(data)
		} catch (error) {
			console.log(error);
		}
	}

	function logOut() {
		localStorage.removeItem('tokens');
		// dispatch({
		// 	type: ACTIONS.user,
		// 	payload: null
		// })
		setUser(null)
	}

	async function checkAuth() {
		try {
			const tokens = JSON.parse(localStorage.getItem("tokens"));
			if (tokens) {
				const { data } = await $axios.get(`${BASE_URL}/auth/user/me/`);
				setUser(data)
			} else{
				setUser(null)
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		checkAuth()
	}, [])

	async function activateUser(uid, token) {
		try {
			await $axios.post(`${BASE_URL}/auth/user/activation/`, {
				uid,
				token
			})
			Navigate("/article")
		} catch (error) {	
			console.log(error)
		}
	}

	async function getProducts() {
		try {
			let res = await $axios.get(`http://13.51.255.44/article/`);
			console.log(res);
		} catch (error) {
			console.log(error)
		}
	}

	async function userList() {
		try {
			let res = await $axios.get(`${BASE_URL}/auth/user/`);
			console.log(res)
		} catch (error) {
			console.log(error)
		}
	}

	const value = {
		user: user,
		register,
		activateUser,
		logIn,
		checkAuth,
		getProducts,
		userList	
	};

	return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;