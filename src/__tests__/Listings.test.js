// Write unit tests for your components using Jest and Enzyme
// ... cannot read properties of undefined reading 'getState') ...

// https://www.andreasreiterer.at/test-presentational-components-jest/

import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import Listings from '../features/Listings';
import Listing from '../features/Listing';

// const mockData = [
//     {
//         url_overridden_by_dest: 'test 01',
//         title: 'test 01'
//     },
//     {
//         url_overridden_by_dest: 'test 02',
//         title: 'test 02'
//     },
//     {
//         url_overridden_by_dest: 'test 03',
//         title: 'test 03'
//     }
// ];

test('Listings component renders correctly', () => {
    let wrapper = shallow(<Provider><Listings /></Provider>);

    expect(wrapper.contains(<Listing />)).toBe(true);
});
