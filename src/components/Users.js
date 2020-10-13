import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../useFetch';

const Users = () => {
  const { data: users } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  return (
    <div>
      <ul className='users-list list'>
        {users.map((user) => {
          return (
            <li key={user.id} className='item'>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.website}</p>
              <Link className='link' to={`/users/${user.id}`}>
                Read More
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
