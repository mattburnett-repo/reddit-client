// TODO: input doesn't resize / get smaller at extreme screen size reduction



export default function SearchDisplay({handleSubmit}) {
    return (
        // <h3>Search</h3>
        <form action="#" onSubmit={handleSubmit}>
        {/* <form action="https://www.reddit.com/search"> */}
            <label htmlFor="searchTerm">Search
                <input type="text" id="searchTerm" name="searchTerm" placeholder="Enter search here" />
            </label>
            <button name="submit" type="submit">Search</button>
        </form>
    )
};
