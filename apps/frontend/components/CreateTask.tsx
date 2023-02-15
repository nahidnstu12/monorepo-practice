import React, { useState } from 'react'
import {  Grid, TextField, Typography } from '@mui/material';
import { useAddTodoMutation } from '../redux/features/apiSlice';

export default function CreateTask() {
    const [title, setTitle] = useState('');
    const [addTodo] = useAddTodoMutation();
    const createTodo = async () => {
        const newTodo = {
          title: title,
          status: '1',
        };
        setTitle("")
        
        await addTodo(newTodo);
      };

  return (
    <Grid item xs={12} my="8px">
        <Typography
          sx={{ color: 'green', background: '#cde3dc', p: '8px', mb: '8px' }}
        >
          Create Task
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
          color="success"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && createTodo()}
        />
      </Grid>
  )
}
