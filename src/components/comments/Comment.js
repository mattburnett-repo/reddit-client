import '../../App.css';

export default function Comment(props) {
    const { comment } = props;
    
    return (
        <>
            <div className="comment-header">
                <span className="comment-label">commentID:</span> {comment.data.id} 
                <span className="comment-label">author:</span> {comment.data.author}
            </div>
            <div className="comment-body">
                <span className="comment-label"> body:</span> {comment.data.body}
            </div>
        </>
    )
}