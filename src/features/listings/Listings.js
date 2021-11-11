import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectListings, selectIsLoading } from './listingsSlice';

import ListingsDisplay from '../../components/listings/ListingsDisplay';

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

    async function loadData() { // add authIsExpired test
      await dispatch(requestAuth()); 
      await dispatch(getListings(pathname));
    }
  
    useEffect(() => {
      loadData();
    }, [pathname]); // TODO: Fix 'React Hook ... has a missing dependency' problem/warning

    if(authIsLoading) {
        return (
            <section className='articles-container'>
                {/* TODO: add an isLoading animation thing here */}
                <div className='section-title'>... requesting auth token</div>  
            </section>
        );
    } else {
        return (
            <ListingsDisplay isLoading={isLoading} articleListings={articleListings} pathname={pathname}/>
        );
    }

}
