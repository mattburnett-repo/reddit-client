import React from 'react';
import Comment from './Comment';

export default function CommentsList( props ) {
  const { comments } = props;
  if (!comments) {
    return (
      <h3>No Comments Today</h3>
    )
  }
  
  return (
    <div>
      <h3>CommentsList</h3>
      <ul className='comments-list'>
        {comments.map(comment => <li key={comment.id}><Comment comment={comment} /> </li>)}
      </ul>
    </div>
  );
}
