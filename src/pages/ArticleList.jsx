import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";

export const articleList = createContext();

export function useArticleLIst() {
  return useContext(articleList);
}

const initState = {
  products: [],
  oneProduct: null,
  categories: [],
  pageTotalCount: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.categories:
      return { ...state, categories: action.payload };
    case ACTIONS.oneProduct:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };

    default:
      return state;
  }
}

function ArticleList({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  // const {
  // 	products,
  // 	getProducts,
  // 	deleteProduct,
  // 	categories,
  // 	getCategories,
  // 	pageTotalCount,
  // } = useProductContext();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [searchVal, setSearchVal] = useState(searchParams.get("search") || "");
  // const [category, setCategory] = useState(
  // 	searchParams.get("category__slug") || "all"
  // );
  // const [page, setPage] = useState(+searchParams.get("page") || 1);

  // useEffect(() => {
  // 	getCategories();
  // }, []);

  // useEffect(() => {
  // 	getProducts();
  // }, [searchParams]);

  // useEffect(() => {
  // 	if (category === "all") {
  // 		setSearchParams({
  // 			search: searchVal,
  // 			page: 1,
  // 		});
  // 	} else {
  // 		setSearchParams({
  // 			search: searchVal,
  // 			category__slug: category,
  // 			page: 1,
  // 		});
  // 	}
  // 	setPage(1);
  // }, [searchVal, category]);

  // useEffect(() => {
  // 	if (category === "all") {
  // 		setSearchParams({
  // 			page: page,
  // 			search: searchVal,
  // 		});
  // 	} else {
  // 		setSearchParams({
  // 			page: page,
  // 			search: searchVal,
  // 			category__slug: category,
  // 		});
  // 	}
  // }, [page]);
  
  async function getProducts() {
    try {
      const { data } = await $axios.get(
        `${BASE_URL}/article/${window.location.search}`
      );
      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: Math.ceil(data.count / 3),
      });
      dispatch({
        type: ACTIONS.products,
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    products: state.products,
		oneProduct: state.oneProduct,
		categories: state.categories,
		pageTotalCount: state.pageTotalCount,
    getProducts,
  };

  return <articleList.Provider value={value}>{children}</articleList.Provider>;
}

export default ArticleList;
