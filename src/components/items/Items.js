import Item from '../item/Item.js';

const Items = () => {
    return (
        <>
        <p>a list of items</p>
        <ul>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
        </ul>
        </>
    );
};

export default Items;