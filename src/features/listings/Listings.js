import { useSelector } from 'react-redux';
import { selectListings, selectIsLoading } from './listingsSlice';

import ListingsDisplay from '../../components/listings/ListingsDisplay';

export default function Listings() {
    const articleListings = useSelector(selectListings);
    const isLoading = useSelector(selectIsLoading); 

    return (
        <ListingsDisplay isLoading={isLoading} articleListings={articleListings}/>
    );
}
