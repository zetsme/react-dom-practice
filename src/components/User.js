import React from 'react';
import { useFindOne } from '../useFindOne';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const { item: user } = useFindOne(
    'https://jsonplaceholder.typicode.com/users',
    id
  );
  return (
    <div className='flex-center'>
      {user ? (
        <ul className='item'>
          <li>Name : {user.name}</li>
          <li>UserName : {user.username}</li>
          <li>Phone: {user.phone}</li>
          <li>Website: {user.website}</li>
          <li>City : {user.address.city}</li>
          <li>Street : {user.address.street}</li>
          <li>Company : {user.company.name}</li>
        </ul>
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
};

export default User;
