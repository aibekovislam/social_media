import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";
import axios from "axios";

export const articleContext = createContext();

export function useArticleContext() {
  return useContext(articleContext);
}
const initState = {
  articles: [],
  oneArticle: null,
  categories: [], 
  pageTotalCount: 1
};

function reducer(state, action) {
  switch (action.type) {
    case "articles":
      return { ...state, articles: action.payload };
    // case ACTIONS.categories:
    //   return { ...state, categories: action.payload };
    case ACTIONS.oneArticle:
      return { ...state, oneArticle: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}
function ArticleContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getArticles(page) {
    try {
        const { data } = await axios.get(`http://13.51.255.44/article/?offset=${page}`);
        console.log(data)
        dispatch({
          type: ACTIONS.pageTotalCount,
          payload: Math.ceil(data.count / 3),
        });
        dispatch({
            type: ACTIONS.articles,
            payload: data.results
        })
    } catch (error) {
        console.log(error)
    }
  }

  async function sendPostRequest(url, data, image) {
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('image', image);
            const tokens = JSON.parse(localStorage.getItem("tokens"));
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Token ${tokens.access}`,
                },
            });
            getArticles()
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    
    async function editArticle(slug, url, data, image) {
      try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('description', data.description);
            if(image) {
              formData.append('image', image);
            }
            const tokens = JSON.parse(localStorage.getItem("tokens"));
            console.log(...formData)
            const response = await axios.patch(`${url}/article/${slug}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Token ${tokens.access}`,
                },
            });
            getArticles();
            return response.data
      } catch (error) {
        console.log(error)
      }
    }

  async function deleteArticle(slug) {
    try {
        const tokens = JSON.parse(localStorage.getItem("tokens"));
        await axios.delete(`${BASE_URL}/article/${slug}/`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Token ${tokens.access}`,
          }
        });
        getArticles();
    } catch (error) {
        console.log(error)
    }
  }

  async function addComment(data, slug) {
    const tokens = JSON.parse(localStorage.getItem("tokens"))
    await axios.post(`${BASE_URL}/article/${slug}/comment`, data, {
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': `Token ${tokens.access}`
      }
    })
    getArticles();
  }

  async function getOneArticle( slug ) {
    try {
        const { data } = await $axios.get(`${BASE_URL}/article/${slug}/`);
        // console.log(data);
        dispatch({
          type: ACTIONS.oneArticle,
          payload: data
        })
    } catch (error) {
        console.log(error)
    }
  }

  async function getCategories() {
    try {
        const { data } = await $axios.get(`${BASE_URL}/category/`);
        dispatch({
            type: ACTIONS.categories,
            payload: data.results
        })
    } catch (error) {
        console.log(error)
    }
  }

  const value = {
    articles: state.articles,
    oneArticle: state.oneArticle,
    // categories: state.categories,
    getArticles,
    getCategories,
    deleteArticle,
    getOneArticle,
    editArticle,
    sendPostRequest,
    pageTotalCount: state.pageTotalCount,
    addComment
  }

  return (
    <articleContext.Provider value={value}>{children}</articleContext.Provider>
  );
}

export default ArticleContext;




// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMDQ2MDc5LCJpYXQiOjE2ODMwMjgwNzksImp0aSI6ImU3YWM0ZGRmYTI5ZjQyMTliOGM1MTg3NjJiY2VlMzE0IiwidXNlcl9pZCI6MX0.RNMVjH3lTBWYx-5y7Io7U_h3XLAUlE1Upm7dVSIjy2A