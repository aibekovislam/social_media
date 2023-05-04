import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useUniversityContext } from '../context/UniversityContext';
import "../static/news.css"
import { BASE_URL } from '../utils/consts';

function News() {
  const { getUniversities, universities, pageTotalUniversityCount } = useUniversityContext();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);

  useEffect(() => {
    getUniversities();
  }, [searchParams])

  return (
    <div>
      <div className="card-right">
        { universities.map((item) => (
          <>
            <img style={{borderRadius:'50px',width:"50px",margin:"5px", height: '50px', objectFit: 'cover'}}
            src={`${BASE_URL}/${item?.avatar}`}
            alt=""
          />
          <div className="card-text-right">
            <h5>{ item.name }</h5>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className='button-right'>Отслеживать</button>
            <Pagination
				    page={page}
				    onChange={(e, value) => setPage(value)}
				    count={pageTotalUniversityCount}
			      />  
          </div>
          </>
        )) }
      </div>
    </div>
  );
}

export default News