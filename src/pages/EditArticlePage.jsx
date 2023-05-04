import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useArticleContext } from '../context/ArticleContext'
import { BASE_URL } from '../utils/consts';

function EditArticlePage() {
  const { editArticle, getOneArticle, oneArticle } = useArticleContext();
  const { slug } = useParams();
  

  const [formValue, setFormValue] = useState({
        title: "",
        description: "",
    });


    useEffect(() => {
        getOneArticle(slug);
    }, []);

    useEffect(() => {
        if (oneArticle) {
            setFormValue(oneArticle);
        }
    }, [oneArticle]);
    console.log(oneArticle)

    function handleChange(e) {
		const obj = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormValue(obj);
	}

    function handleSubmit(event) {
        const image = document.getElementById('image').files[0];
		event.preventDefault();
		editArticle(slug, `${BASE_URL}`, formValue, image);
	}

  return (
    <div className="containerAdd">
      <h3 className="addPostTitle">Изменить пост</h3>
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
        <label>{ formValue?.image }</label>
        <button onClick={(e) => handleSubmit(e)} type="submit" className="buttonAdd">
          Add
        </button>
      </form>
    </div>
  )
}

export default EditArticlePage