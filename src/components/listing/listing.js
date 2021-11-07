
export default function Listing({ article }) {
    return (
        <button key={article.id} className='article-container'>
            <img src={article.thumbnail} alt='' className='article-image' />
            <div className='article-content-container'>
                <h3 className='article-title'>
                <a href={article.url_overridden_by_dest}>{article.title}</a>
                </h3>
            </div>
        </button>
    );
}
