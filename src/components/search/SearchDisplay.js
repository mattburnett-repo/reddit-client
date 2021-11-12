export default function SearchDisplay({handleSubmit}) {
    return (
        // <h3>Search</h3>
        <form action="#" onSubmit={handleSubmit} className="filterSearch">
        {/* <form action="https://www.reddit.com/search"> */}
            <label htmlFor="searchTerm">Search&nbsp;&nbsp;
                <input type="text" id="searchTerm" name="searchTerm" className="filterLink" placeholder="Enter search here" />
            </label>&nbsp;&nbsp;
            <button name="submit" type="submit" className="filterLink">Search</button>
        </form>
    )
};
