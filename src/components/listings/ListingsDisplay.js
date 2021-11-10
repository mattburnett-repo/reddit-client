import Listing from '../listing/Listing';

export default function ListingsDisplay(props) { 
    const { isLoading, articleListings } = props;

    if(isLoading) { // https://www.andreasreiterer.at/test-presentational-components-jest/
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
