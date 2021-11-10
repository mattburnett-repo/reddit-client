// Write unit tests for your components using Jest and Enzyme
//      Jest as test runner, Enzyme for the rendering (shallow, etc)

// ... cannot read properties of undefined reading 'getState') ...

// https://www.andreasreiterer.at/test-presentational-components-jest/

import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import Search from '../features/Filter';

test('Search component renders correctly', () => {
    let wrapper = shallow(<Provider><Search /></Provider>);

    expect(wrapper.contains(Search)).toBe(true);
});