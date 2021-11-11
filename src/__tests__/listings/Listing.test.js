// Write unit tests for your components using Jest and Enzyme

import { shallow } from 'enzyme';
import Listing from '../../components/listing/Listing';

const mockData = {
        thumbnail: 'test thumbnail',
        url_overridden_by_dest: 'test url',
        title: 'test title'
    };

test('Listing component renders correctly from props', () => {
    let wrapper = shallow(<Listing article={mockData} />)

    expect(wrapper.contains('test title')).toBe(true);
});

