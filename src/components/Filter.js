// I think the requirements mean by "Users can filter the data based on categories that are predefined" these categories:
//      best / controversial / hot / new / rising / top

//  tried using Router / Link / Route, but all we really need to do is change the state (meaning: dispatch(getListings(someValue) )
//      Listings component already useSelector's itself to monitor changes to state, so calling Route / component is kind of pointless
//      all we really want to do is click on a filter item (ie 'controversial'), update the state, and show the new listings.

import { useDispatch } from 'react-redux';
import { getListings } from '../stateManagement/listingsSlice'

export default function Filter() {
    const dispatch = useDispatch();
    
    return (
        <nav>
            Filter by:
            <button onClick={() => dispatch(getListings('best'))}>Best</button>
            <button onClick={() => dispatch(getListings('controversial'))}>Controversial</button>
            <button onClick={() => dispatch(getListings('hot'))}>Hot</button>
            <button onClick={() => dispatch(getListings('new'))}>New</button>
            <button onClick={() => dispatch(getListings('rising'))}>Rising</button>
            <button onClick={() => dispatch(getListings('top'))}>Top</button>
        </nav>
    );
};
