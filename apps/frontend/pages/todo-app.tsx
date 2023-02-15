
import { Divider, Grid, Typography } from '@mui/material';
import CreateTask from '../components/CreateTask';
import TaskLists from '../components/TaskLists';

export function TodoApp() {

  return (
    <Grid container sx={{ width: '80%', mx: 'auto', mt: '80px' }}>
      <CreateTask />
      <Grid item xs={12}>
        <Typography sx={{ color: 'green', background: '#cde3dc', p: '8px' }}>
          New Task
        </Typography>
        <Divider sx={{ border: '1px solid #777' }} />
        <TaskLists type={1} />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ color: 'red', background: '#cde3dc', p: '8px' }}>
          Completed Task
        </Typography>
        <Divider sx={{ border: '1px solid #777' }} />
        <TaskLists type={2} />
      </Grid>
    </Grid>
  );
}

export default TodoApp;
