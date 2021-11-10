import { useDispatch } from 'react-redux';
import FilterDisplay from '../../components/filter/FilterDisplay';
import { getListings } from '../listings/listingsSlice';

export default function Filter(filterTerm = '') {
    const dispatch = useDispatch();

    const handleClick = (filterTerm) => {
        return () => dispatch(getListings(filterTerm));
    } 

    return (
        <FilterDisplay handleClick={handleClick}/>
    )
}