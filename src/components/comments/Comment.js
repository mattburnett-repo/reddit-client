
export default function Comment(props) {
    const { comment } = props;
    
    return (
        <div>
            <h3>Comment</h3>
            articleID: {comment.article_id} 
            commentID: {comment.data.id} 
            author: {comment.data.author}
            title: {comment.title}
            body: {comment.data.body}
        </div>
    )
}