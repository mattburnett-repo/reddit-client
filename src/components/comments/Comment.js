
export default function Comment(props) {
    const { comment } = props;
    
    return (
        <div>
            <h3>Comment</h3>
            comment: {comment.title}
        </div>
    )
}