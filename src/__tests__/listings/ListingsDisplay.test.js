// https://www.andreasreiterer.at/test-presentational-components-jest/

import { shallow } from 'enzyme';

import ListingsDisplay from '../../components/listings/ListingsDisplay';
import Listing from '../../components/listing/Listing';

const mockData = [
    {
        url_overridden_by_dest: 'test 01',
        title: 'test 01'
    },
    {
        url_overridden_by_dest: 'test 02',
        title: 'test 02'
    },
    {
        url_overridden_by_dest: 'test 03',
        title: 'test 03'
    }
];

describe('ListingsDisplay', () => {
    it('component renders correctly when isLoading = true', () => {
        let wrapper = shallow(<ListingsDisplay isLoading={true} articleListings={mockData}/>);
        let text = wrapper.find('section').text(); // look for ... isLoading text

        expect(text).toBe('... loading');
    });
    it('component renders correctly when isLoading = false', () => {
        let wrapper = shallow(<ListingsDisplay isLoading={false} articleListings={mockData}/>);
        let text = wrapper.find('section');

        expect(text.length).toBe(1);
    });
    it('contains three Listing components', () => {
        let wrapper = shallow(<ListingsDisplay isLoading={false}  articleListings={mockData} />)
        let text = wrapper.find(Listing); 

        expect(text.find(Listing).length).toBe(3);
    })
})

