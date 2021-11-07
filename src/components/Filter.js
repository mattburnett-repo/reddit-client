// I think the requirements mean by "Users can filter the data based on categories that are predefined" these categories:
//      best / controversial / hot / new / random / rising / top

export default function Filter() {
    return (
            <div>
                {/* Filter by:&nbsp; Switch / Router goes here? */}
                {/* set theEndpoint in listingsSlice before sending get request */}
                <a href="alert('best')">best</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="alert('controversial')">controversial</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="alert('hot')">hot</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="alert('new')">new</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="alert('random)">random</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="alert('rising')">rising</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="alert('top')">top</a>
           </div>
    );
};
