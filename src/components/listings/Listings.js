import { useSelector } from 'react-redux';
import { selectListings } from './listingsSlice';

import Listing from '../listing/Listing';

const Listings = () => {
    const articleListings = useSelector(selectListings);

    return (
        <section className='articles-container'>
            <h2 className='section-title'>All Articles</h2>
            {articleListings.map((article) => (
                <div key={article.id}>     
                    <Listing article={article.data}/>
                </div>
            ))}
        </section>
    );
};

export default Listings;