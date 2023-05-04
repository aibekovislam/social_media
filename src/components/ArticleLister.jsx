import { Button, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useArticleContext } from '../context/ArticleContext';
import '../static/articleList.css';
import { BASE_URL } from '../utils/consts';
import { ReactComponent as PencilSVG } from '../static/617321501600002638.svg';
import { ReactComponent as TrashSVG } from '../static/20518457671581426692.svg';
import { ReactComponent as CommentsSVG } from '../static/8377642891595601833.svg';
import Comments from '../pages/Comments';


function ArticleLister() {
  const { getArticles, articles, pageTotalCount, deleteArticle } = useArticleContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(+searchParams.get("page") || 1);
  const [ commentsState, setCommentState ] = useState(false)
  const history = useNavigate();

  useEffect(() => {
    getArticles(page)
  }, [page])

  const handlePageChange = (event, value) => {
    setPage(value);
    searchParams.set("offset", value);
    history(`${location.pathname}?${searchParams.toString()}`);
  }

  return (
    <div className='posts'>
        { articles.map((item) => (
            <div className='postsChildren' key={item.slug}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <img src={`${item?.avatar}`} className='postImage' />
                <div className='d-f'>
                  <a className='linkButton' href={`/edit/${item.slug}`}><PencilSVG className='change'></PencilSVG></a>
                  <TrashSVG className='trash' onClick={() => deleteArticle(item.slug)} />
                  {/* <div onClick={() => {
                    setCommentState(!commentsState)
                  }}>
                  </div> */}
                    <a href={`/detail/${item.slug}`}><CommentsSVG className='trash'></CommentsSVG></a>
                </div>
            </div>
        )) }      
        <Pagination
          page={page}
          onChange={handlePageChange}
          count={pageTotalCount}
        />  
    </div>
  )
}

export default ArticleLister;
