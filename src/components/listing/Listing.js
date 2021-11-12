import { Link } from 'react-router-dom';

export default function Listing(props) {
    const { key, article } = props;

    return (
        // key is article.id, passed from caller
        <div key={key} className='article-container'> 
            <img src={article.thumbnail} alt='' className='article-image' />
            <div className='article-content-container'>
                <h3 className='article-title'>
                    <a href={article.url_overridden_by_dest}>{article.title}</a>
                </h3>
                <h4>
                    <Link to={`/comments/${article.id}`} >{article.num_comments} comments</ Link>
                </h4>
            </div>
        </div>
    );
}
