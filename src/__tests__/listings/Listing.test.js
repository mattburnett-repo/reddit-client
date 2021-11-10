// Write unit tests for your components using Jest and Enzyme
// ... cannot read properties of undefined reading 'getState') ...

// https://www.andreasreiterer.at/test-presentational-components-jest/
import { shallow } from 'enzyme';
import Listing from '../../components/listing/Listing';

const mockData = {
        thumbnail: 'test thumbnail',
        url_overridden_by_dest: 'test url',
        title: 'test title'
    };

// TODO: look inside of the rendered component and confirm prop's details
test('Listing component renders correctly from props', () => {
    let wrapper = shallow(<Listing article={mockData} />)

    expect(wrapper.contains('test title')).toBe(true);
});

