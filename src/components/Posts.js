import React from 'react';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';

const Posts = () => {
  const { data: posts } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return (
    <div>
      <ul className='posts-list list'>
        {posts.map((post) => {
          return (
            <li key={post.id} className='item'>
              <p>User : {post.userId}</p>
              <p>Title : {post.title}</p>
              <Link className='link' to={`/posts/${post.id}`}>
                Read More
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
