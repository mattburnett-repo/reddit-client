import Comment from './Comment';
import LoadingMessage from '../Loading/LoadingMessage.js';

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
          <h3>CommentsList ({comments.length} comments)</h3>
            {comments.map((comment, index) => (
                <div key={index}>     
                    <Comment comment={comment} /> 
                </div>
                )
            )}
        </>
      );
    }
  }
}
