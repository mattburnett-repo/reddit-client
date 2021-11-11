import { Link } from 'react-router-dom';

export default function FilterDisplay({handleClick}) {
    return (
        <nav name="filter">
            Filter by:
            <Link to="/best">Best</ Link>
            <Link to="/controversial">Controversial</ Link>
            <Link to="/hot">Hot</ Link>
            <Link to="/new">New</ Link>
            <Link to="/rising">Rising</ Link>
            <Link to="/top">Top</ Link>
        </nav>
    );
};
