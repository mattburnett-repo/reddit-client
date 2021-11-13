import Listing from '../Listing/Listing';
import LoadingMessage from '../Loading/LoadingMessage'

export default function ListingsDisplay(props) { 
    const { isLoading, articleListings, pathname } = props;

    if(isLoading) {
        return (<LoadingMessage message="... loading articles"/>);
        // return (<LoadingMessage type="simple-spinner" message="... loading articles"/>);
    } else {
        if(!articleListings) {
            return (
                <section className='articles-container'>
                    <div className='section-title'>No Articles Today</div>     
                </section>            
            )        
        } else {
         return (
            // <section className='articles-container'>
            <>
                <h2 className='section-title'>All Articles -- {pathname}</h2> 
                <section id="grid">
                    
                    {articleListings.map((article, index) => (
                        <div key={index}>     
                            <Listing key={article.id} article={article.data}/>
                        </div>
                        )
                    )}
                </section>   
            </>        
         )}
    };        
};
