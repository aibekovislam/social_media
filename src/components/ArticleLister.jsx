import React, { useEffect } from "react";
import { useArticleContext } from "../context/ArticleContext";
import "../static/articleList.css";
import LikeCard from "../LikeShared/LikeCard";

function ArticleLister() {
  const { getArticles, articles } = useArticleContext();

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="posts">
      {articles.map((item) => (
        <div className="postsChildren">
          <LikeCard
            slug={item?.slug}
            title={item?.title}
            rating={item?.rating}
          />
        </div>
      ))}
    </div>
  );
}

export default ArticleLister;
