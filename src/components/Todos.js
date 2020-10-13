import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../useFetch';

const Todos = () => {
  const { data: todos } = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  return (
    <div>
      <ul className='list todos-list'>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className='item'>
              <p>User: {todo.userId}</p>
              <p>Title: {todo.title}</p>
              <Link className='link' to={`/todos/${todo.userId}`}>
                Todos by this User
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
