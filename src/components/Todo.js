import React, { useEffect, useCallback, useState } from 'react';

import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const Todo = () => {
  const { id } = useParams();
  const { data: todos } = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const [todosByUser, setTodosByUser] = useState([]);
  const filter = useCallback(
    (id) => {
      setTodosByUser(todos.filter((i) => i.userId === parseInt(id)));
    },
    [todos]
  );
  useEffect(() => {
    filter(id);
  }, [id, todos, filter]);
  const checkTodo = (completed) => {
    return completed ? 'completed' : '';
  };
  return (
    <div className='flex-center'>
      {todosByUser ? (
        <ul className='item'>
          {todosByUser.map((todo) => {
            return (
              <li key={todo.id} className={checkTodo(todo.completed)}>
                {todo.title}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};

export default Todo;
