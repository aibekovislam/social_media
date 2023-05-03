import React, { useEffect } from 'react'
import { useArticleContext } from '../context/ArticleContext';
import '../static/articleList.css';

function ArticleLister() {

  const { getArticles, articles } = useArticleContext();

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <div className='posts'>
        { articles.map((item) => (
            <div className='postsChildren'>
                <h1>{item.title}</h1>
            </div>
        )) }        
    </div>
  )
}

export default ArticleLister