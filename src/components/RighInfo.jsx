import React from 'react'
import { useAuthContext } from '../context/AuthContext';
import { useUniversityContext } from '../context/UniversityContext';
import "../static/rightInfo.css";
import News from './News';

function RightInfo() {
  const { getUniversities, universities } = useUniversityContext();
  const { user, users } = useAuthContext();
  return (
    <div className="right-block-main">
      <h2 style={{ padding: "10px 15px", fontSize: '17px', fontWeight: '100' }}>Добавьте в свою ленту</h2>
      {/* <Chat  /> */}
      {/* <News /> */}
      { universities.map((item) => (
        <News/>
      )) }
      <p className="btn-news">Cмотреть рекомендации</p>
      <div className="card-right">
      </div>
    </div>
  );
}

export default RightInfo