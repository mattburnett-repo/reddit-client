import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectListings, selectIsLoading } from './listingsSlice';

import ListingsDisplay from '../../components/Listings/ListingsDisplay';
import LoadingMessage from '../../components/Loading/LoadingMessage';

import { selectIsLoading as selectAuthIsLoading, requestAuth } from '../auth/authSlice';
import { getListings } from './listingsSlice';

export default function Listings(props) {
    let { pathname } = props;

    if(!pathname) {
        pathname = 'best';
    }

    const authIsLoading = useSelector(selectAuthIsLoading);
    const isLoading = useSelector(selectIsLoading); 
    const articleListings = useSelector(selectListings);

   const dispatch = useDispatch();
  
    useEffect(() => {
        async function loadData() { // add authIsExpired test
            await dispatch(requestAuth()); 
            await dispatch(getListings(pathname));
        };

        loadData();
    }, [pathname, dispatch]); 

    if(authIsLoading) {
        return (<LoadingMessage message="... authorizing"/>);
    } else {
        return (
            <ListingsDisplay isLoading={isLoading} articleListings={articleListings} pathname={pathname}/>
        );
    }

}
