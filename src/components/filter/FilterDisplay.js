// I think the requirements mean by "Users can filter the data based on categories that are predefined" these categories:
//      best / controversial / hot / new / rising / top

// import { Link } from 'react-router-dom';

export default function FilterDisplay({handleClick}) {
    return (
        <nav name="filter">
            Filter by:
            <button name="best" onClick={handleClick('best')}>Best</button>
            <button name="controversial" onClick={handleClick('controversial')}>Controversial</button>
            <button name="hot" onClick={handleClick('hot')}>Hot</button>
            <button name="new" onClick={handleClick('new')}>New</button>
            <button name="rising" onClick={handleClick('rising')}>Rising</button>
            <button name="top" onClick={handleClick('top')}>Top</button>

            {/* <Link to="/best">Best</ Link>
            <Link to="/controversial">Controversial</ Link>
            <Link to="/hot">Hot</ Link>
            <Link to="/new">Best</ Link>
            <Link to="/rising">Rising</ Link>
            <Link to="/top">Top</ Link> */}
        </nav>
    );
};
