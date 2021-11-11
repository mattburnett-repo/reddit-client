import Listing from '../listing/Listing';

export default function ListingsDisplay(props) { 
    const { isLoading, articleListings, pathname } = props;

    if(isLoading) {
        return (
            <section className='articles-container'>
                {/* TODO: add an isLoading animation thing here */}
                <div className='section-title'>... loading</div>  
            </section>
        );
    } else {
        if(!articleListings) {
            return (
                <section className='articles-container'>
                    <div className='section-title'>No Articles Today</div>     
                </section>            
            )        
        } else {
         return (
            <section className='articles-container'>
                <h2 className='section-title'>All Articles -- {pathname}</h2> 
                {articleListings.map((article, index) => (
                    <div key={index}>     
                        <Listing key={article.id} article={article.data}/>
                    </div>
                    )
                )}
            </section>           
         )}
    };        
};
