import { Button } from '@mui/base';
import { Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useArticleContext } from '../context/ArticleContext'
import { BASE_URL } from '../utils/consts';

function Comments() {
  const { getOneArticle, oneArticle } = useArticleContext();
  const [ formValue, setFormValue ] = useState({
    text: '',
  })
  const { slug } = useParams();

  const { addComment } = useArticleContext();

  function handleChange(e) {
    const obj = {
        ...formValue,
        [e.target.name]: e.target.value
    }
    setFormValue(obj);
  }

  useEffect(() => {
    getOneArticle(slug)
  }, [oneArticle])

  return (
    <div className='commentMainBlock'>
        <Sidebar/>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Name"
                variant="outlined"
                fullWidth

                // onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                label="Comment"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="text"
                value={formValue.text}
                onChange={(e) => handleChange(e)}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={() => addComment({
                    
                })}>
                Add Comment
                </Button>
            </Grid>
            <Grid item xs={12}>
                {/* {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                    <p>{comment.comment}</p>
                </div>
                ))} */}
            </Grid>
        </Grid>
    </div>
  )
}

export default Comments