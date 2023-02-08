import styles from './index.module.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import TodosPage from '../components/Todos';

const url = "http://localhost:3333/api/todos";
export const readTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo)

export function Index() {
  const [state, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    const {data} = await readTodos();
    console.log(data)
    setState(data)
    }
    fetchData()
  }, [])
  
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome frontend 👋
            </h1>
          </div>

          <TodosPage data={state} />
        </div>
      </div>
    </div>
  );
}

export default Index;
