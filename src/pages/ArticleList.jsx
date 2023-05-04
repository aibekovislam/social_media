import { Container } from '@mui/system';
import React, { useEffect } from 'react'
import LeftInfo from '../components/LeftInfo';
import Sidebar from '../components/Sidebar';
import { useArticleContext } from '../context/ArticleContext'
import MainInfo from '../components/MainInfo'
import RightInfo from '../components/RightInfo';

import '../static/article.css'
import { useAuthContext } from '../context/AuthContext';

function ArticleList() {

  const { getArticles, articles } = useArticleContext();
  // useEffect(() => {
  //   getArticles();
  // }, [])

  return (
        <div>
        <Sidebar/>
          <div className='containerIslam' style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', gap: '30px' }}>
              <LeftInfo/>
              <MainInfo/>
              <RightInfo/>
            </div>
          </div>
        </div>
  )
}

export default ArticleList