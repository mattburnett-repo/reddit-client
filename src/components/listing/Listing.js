import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

export default function Listing(props) {
    const { key, article } = props;
    let imgSource;

    if(article.thumbnail === 'self') {
        imgSource = logo;
    } else {
        imgSource = article.thumbnail;
    }

    // imgSource = logo;

    return (
        // key is article.id, passed from caller
        <div key={key} className='article-container'> 
            <img src={imgSource} alt='' className='article-image' />        
            <div className='article-content-container'>
                <h3 className='article-title'>
                    <a href={article.url_overridden_by_dest}>{article.title}</a>
                </h3>
                <div>
                    <h4>
                     <Link to={`/comments/${article.id}`} className="">{article.num_comments} comments</ Link>
                    </h4>                 
                </div>
            </div>
        </div>
    );
}
