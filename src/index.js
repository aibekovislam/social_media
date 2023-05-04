import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import ArticleContext from './context/ArticleContext';
import UniversityContext from './context/UniversityContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContext>
      <ArticleContext>
        <UniversityContext>
          <App/>
        </UniversityContext>
      </ArticleContext>
    </AuthContext>
  </BrowserRouter>
);

