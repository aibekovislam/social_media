import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useArticleContext } from "../context/ArticleContext";
import '../static/add.css';

function ArticleAdd() {
  const [category, setCategory] = useState("юрты");
  const [images, setImages] = useState(null)
  const [formValue, setFormValue] = useState({
    title: "",
    // price: "",
    description: "",
    // category: "",
  });

  const { addArticle, sendPostRequest } = useArticleContext();

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     sendPostRequest(
// 		'http://13.51.255.44/article/',
// 		data
// 	);
//   };
  
	function uploadArticle(e) {
		e.preventDefault();
		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value;
		const image = document.getElementById('image').files[0];

		sendPostRequest(
			'http://13.51.255.44/article/',
			{ title, description },
			image
		)
			.then(data => {
				console.log('Article uploaded:', data);
			})
			.catch(error => {
				console.error('Error uploading article:', error);
			});
	}


  return (
    <div className="containerAdd">
      <h3 className="addPostTitle">Добавить пост</h3>
      <form className="formAdd">
        <input
          placeholder="Title"
          value={formValue.title}
          type="text"
          name="title"
          id="title"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />
        <textarea
          placeholder="Description"
          name="description"
          id="description"
          value={formValue.description}
          onChange={(e) => handleChange(e)}
          className="textareaAdd"
        />

        <input
          placeholder="Image"
          name="image"
          type="file"
          id="image"
          className="fileAdd"
		  accept="image/png, image/jpeg"
      style={{ borderRadius: '25px', width: '470px', border: '3px solid #0a66c2', color: "#0a66c2" }}
        />
        <button onClick={(e) => uploadArticle(e)} type="submit" className="buttonAdd">
          Add
        </button>
      </form>
    </div>
  );
}

export default ArticleAdd;
