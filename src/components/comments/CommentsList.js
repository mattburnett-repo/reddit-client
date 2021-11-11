import Comment from './Comment';

export default function CommentsList(props) {
  const { isLoading, comments } = props;
  
  if (!comments) {
    return (
      <h3>No Comments Today</h3>
    )
  } else {
    if(isLoading) { 
      return (
          <section className='articles-container'>
              {/* TODO: add an isLoading animation thing here */}
              <div className='section-title'>... loading</div>  
          </section>
      );
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
