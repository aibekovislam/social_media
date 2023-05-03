import React from 'react'
import "../static/rightInfo.css";
import News from './News';

function RightInfo() {
  return (
    <div className="right-block-main">
      <h2 style={{ padding: "10px 15px", fontSize: '17px', fontWeight: '100' }}>Добавьте в свою ленту</h2>
      {/* <Chat  /> */}
      <News />
      <News />
      <News />
      <p className="btn-news">смотреть рекомендации</p>
    </div>
  );
}

export default RightInfo