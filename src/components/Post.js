import React from 'react';
import { useParams } from 'react-router-dom';
import { useFindOne } from '../useFindOne';

const Post = () => {
  const { id } = useParams();
  const { item: post } = useFindOne(
    'https://jsonplaceholder.typicode.com/posts',
    id
  );
  return (
    <div className='flex-center'>
      {post ? (
        <article className='item'>
          <p>User: {post.userId}</p>
          <p>Title: {post.title}</p>
          <p>Post: {post.body}</p>
        </article>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Post;
