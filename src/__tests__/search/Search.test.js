import { shallow } from 'enzyme';
import SearchDisplay from '../../components/search/SearchDisplay';

describe('Search', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<SearchDisplay />);
        let text = wrapper.find('form');
    
        expect(text.length).toBe(1);
    });
    it('submits a search request', () => {
        expect(true).toBe(false);
    })
});
