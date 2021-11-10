// Write unit tests for your components using Jest and Enzyme
// ... cannot read properties of undefined reading 'getState') ...

// https://www.andreasreiterer.at/test-presentational-components-jest/

import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import Filter from '../features/Filter';

test('Filter component renders correctly', () => {
    let wrapper = shallow(<Provider><Filter /></Provider>);
    expect(wrapper.contains('Filter by')).toBe(true);
});