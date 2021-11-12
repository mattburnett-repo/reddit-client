import { useDispatch } from "react-redux";
import SearchDisplay from "../../components/Search/SearchDisplay";
import { getListings } from '../listings/listingsSlice';

export default function Search() {
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(getListings('search?q=' + e.target.searchTerm.value));
        e.target.searchTerm.value = '';
    }

    return (
        <div>
            <SearchDisplay handleSubmit={handleSubmit}/>
        </div>
    )

}