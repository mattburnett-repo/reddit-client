import { useSelector } from 'react-redux';
import { selectListings, selectIsLoading } from '../stateManagement/listingsSlice';

import Listing from './Listing';

export default function Listings() { 
    const articleListings = useSelector(selectListings);
    const isLoading = useSelector(selectIsLoading); 

    if(isLoading) {
        return (
            <section className='articles-container'>
                {/* TODO: add an isLoading animation thing here */}
                <div className='section-title'>... loading</div>  
            </section>
        );
    } else {
        return (
            <section className='articles-container'>
                {/* TODO: show pathname / search term after 'All Articles' */}
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
