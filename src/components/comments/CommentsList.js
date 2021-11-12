import Comment from './Comment';
import LoadingMessage from '../Loading/LoadingMessage.js';

import '../../App.css';

export default function CommentsList(props) {
  const { isLoading, comments } = props;
  
  if (!comments) {
    return (
      <h3>No Comments Today</h3>
    )
  } else {
    if(isLoading) { 
      return (<LoadingMessage message="... loading comments"/>);
    } else {
      return (
        <>
          <h3 className="comments-header">Comments: ({comments.length} comments)</h3>
          
          <div>
            {comments.map((comment, index) => (
                <div key={index} className="comment-container">     
                    <Comment comment={comment} /> 
                </div>
                )
            )}         
          </div>  
        </>
      );
    }
  }
}
