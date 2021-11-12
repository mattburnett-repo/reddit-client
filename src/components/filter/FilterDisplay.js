import { Link } from 'react-router-dom';

export default function FilterDisplay({handleClick}) {
    return (
        <nav name="filter" className="filterSearch">
            Filter by:&nbsp;&nbsp;
            <Link to="/best" className="filterLink">Best</ Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/controversial" className="filterLink">Controversial</ Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/hot" className="filterLink">Hot</ Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/new" className="filterLink">New</ Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/rising" className="filterLink">Rising</ Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/top" className="filterLink">Top</ Link>
        </nav>
    );
};
