import React, { useState } from "react";
import { BASE_URL } from "../utils/consts";

function LikeCard({ slug, title, rating }) {
  const [articleLikes, setArticleLikes] = useState(rating);

  const handleLike = async () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    await fetch(`${BASE_URL}/article/${slug}/like/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${tokens.access}`,
      },
    })
      .then((response) => {
        response.json();
        console.log(response.body);
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Likes: {articleLikes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default LikeCard;
