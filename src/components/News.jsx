import React from 'react'
import "../static/news.css"

function News() {
  return (
    <div>
      <div className="card-right">
        <img style={{borderRadius:'50px',width:"50px",margin:"5px", height: '50px', objectFit: 'cover'}}
          src="https://media.licdn.com/dms/image/C4D0BAQEBr5YXaxN8cA/company-logo_100_100/0/1660505899064?e=1691020800&v=beta&t=iI-CB5_xTwe5B2eCjhxSdbJ55RTRrcP4tORG3cB3pI4"
          alt=""
        />
        <div className="card-text-right">
          <h5>bayaman</h5>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className='button-right'>Отслеживать</button>
        </div>
      </div>
    </div>
  );
}

export default News