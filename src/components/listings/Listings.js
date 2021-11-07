import { useSelector } from 'react-redux';
import { selectListings, selectIsLoading } from './listingsSlice';

import Listing from '../listing/Listing';

const Listings = () => {
    const articleListings = useSelector(selectListings);
    const isLoading = useSelector(selectIsLoading); 

    if(isLoading) {
        return (
            <section className='articles-container'>
                <h2 className='section-title'>... loading</h2>
            </section>
        );
    } else {
        return (
            <section className='articles-container'>
                <h2 className='section-title'>All Articles</h2>
                {articleListings.map((article, index) => (
                    <div key={index}>     
                        <Listing key={article.id} article={article.data}/>
                    </div>
                    )
                )}
            </section>
        );        
    } // end if
};

export default Listings;