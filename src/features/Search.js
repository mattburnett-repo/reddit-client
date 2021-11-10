// TODO: input doesn't resize / get smaller at extreme screen size reduction

import { useDispatch } from "react-redux";
import { getListings } from '../stateManagement/listingsSlice';

export default function Search() {
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        // dispatch(getListings('search?q=' + e.target.searchTerm.value)); // becomes pathname / pathName when it gets to getListings() 
        dispatch(getListings('search?q=' + e.target.searchTerm.value));
        e.target.searchTerm.value = '';
    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="searchTerm">Search
                <input type="text" id="searchTerm" name="searchTerm" placeholder="Enter search here" />
            </label>
            <button name="submit" type="submit">Search</button>
        </form>
    )
};
