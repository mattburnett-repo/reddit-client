import { useSelector } from 'react-redux';

import { selectListings, selectIsLoading } from './listingsSlice';

import ListingsDisplay from '../../components/listings/ListingsDisplay';

export default function Listings(props) {
    // let pathname = props.match.params.pathname;

    // if(!pathname) {
    //     pathname = 'best';
    // }

    const isLoading = useSelector(selectIsLoading); 
    const articleListings = useSelector(selectListings);

    return (
        <ListingsDisplay isLoading={isLoading} articleListings={articleListings}/>
    );
}
