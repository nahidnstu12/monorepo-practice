import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteTodoMutation, useEditTodoMutation, useGetTodosQuery } from '../redux/features/apiSlice';


export default function TaskLists({type}) {
    const { data: newTasks } = useGetTodosQuery(`status=${type}`); 
    const [deleteTodo] = useDeleteTodoMutation();
    const [editTodo] = useEditTodoMutation();


    const handleDelete = async (id: string) => {
        await deleteTodo(id);
        alert('delete todo' + id);
      };

      const handleStatusChange = async(data:object) => {
    
        await editTodo({id: data?.id, data: data?.status})
      }
  return (
    <List sx={{ width: '100%', bgcolor: '#cde3dc', my: '10px' }}>
    {newTasks?.map((item: any) => (
      <ListItem
        key={item.id}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => handleDelete(item.id)} />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={item.status == 2}
              tabIndex={-1}
              disableRipple
              onChange={()=>handleStatusChange({id:item.id, status:type==1 ? 2:1})}
            />
          </ListItemIcon>
          <ListItemText primary={item?.title} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  )
}
