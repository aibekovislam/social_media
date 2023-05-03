import React from 'react'
import "../info/rightinfo.css";
import News from './News';

function RightInfo() {
  return (
    <div>
      <div className="right-block-main">
        <h5 style={{ padding: "10px 5px" }}>Добавьте в свою ленту</h5>
        {/* <Chat  /> */}
        <News />
        <News />
        <News />
        <p className="btn-news">смотреть рекомендации</p>
      </div>
      <div className="advertisement">
        <img style={{borderRadius:"10px"}}
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default RightInfo