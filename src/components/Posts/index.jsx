import { useQuery } from '@apollo/client';
import React from 'react';
import { All_POST } from '../../graphql/queries';
import PostDetail from './PostDetail';


function Posts() {
  const { data, error, loading } = useQuery(All_POST)

  if (error) return null
  return <div>
    {
      data && data.allPost?.map(post => <PostDetail 
          key={post.id}
          title={post.user}
          description={post.description}
          id={post.id}
          image={post.image}
          author={post.user.username}
          photo={post.user.photo}
          uid={post.user.uid} 
          createdAt={post.createdAt}
      />) 
    }
  </div>;
}

export default Posts;
