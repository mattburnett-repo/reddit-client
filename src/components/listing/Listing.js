import { Link } from 'react-router-dom';

export default function Listing(props) {
    const { key, article } = props;

    return (
        // key is article.id, passed from caller
        <button key={key} className='article-container'> 
            <img src={article.thumbnail} alt='' className='article-image' />
            <div className='article-content-container'>
                <h3 className='article-title'>
                    <a href={article.url_overridden_by_dest}>{article.title}</a>
                </h3>
                <h4>
                    {/* article.id: {article.id}<br/> */}
                    {/* TODO: Router / Link here */}
                    {/* <a href="#">Number of comments: {article.num_comments}</a>  */}
                    <Link to={`/comments/${article.id}`} >{article.num_comments} comments</ Link>
                </h4>
            </div>
        </button>
    );
}
