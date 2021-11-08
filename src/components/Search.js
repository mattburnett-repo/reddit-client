// TODO: input doesn't resize / get smaller at extreme screen size reduction

// TODO: search results don't have images / useable links

import { useDispatch } from "react-redux";
import { getListings } from '../stateManagement/listingsSlice';

export default function Search() {
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(getListings('subreddits/search?q=' + e.target.searchTerm.value)); // becomes pathname / pathName when it gets to getListings() 
        e.target.searchTerm.value = '';
    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <input id="searchTerm" name="searchTerm" placeholder="Enter search here" />
            <button type="submit">Go</button>
        </form>
    )
};
