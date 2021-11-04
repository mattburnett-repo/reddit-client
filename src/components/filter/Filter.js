const Filter = () => {
    return (
            <div>
                Filter by:&nbsp;
                <a href="alert('item 1')">item 1</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="alert('item 2')">item 2</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="alert('item 3')">item 3</a>
           </div>
    );
};

export default Filter;

export const selectFilterItems = (state) => state.filterItems;