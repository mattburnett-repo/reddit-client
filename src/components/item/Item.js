// TODO: use Router for links?

// import { useDispatch } from "react-redux";

const Item = () => {
    return <p><a href="./item.js">go to a single item from this link.</a></p>;
    // TODO: change <a> to button and onClick to test items.testOutput
    
    // const dispatch = useDispatch();

    // const handleClick = () => {
    //     dispatch('items/testOutput');
    // }

    // return <p><button onClick={handleClick} value="click to send test output to console" /></p>
}

export default Item;