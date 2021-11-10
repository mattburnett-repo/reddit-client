import { shallow } from 'enzyme';
import SearchDisplay from '../../components/search/SearchDisplay';

describe('Search', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<SearchDisplay />);
        let text = wrapper.find('form');
    
        expect(text.length).toBe(1);
    });
    it('submits a search request', () => {  
        const mockCallBack = jest.fn();

        let wrapper = shallow(<SearchDisplay handleSubmit={mockCallBack}/>);
        expect(wrapper.find("form").length).toBe(1);

        wrapper.find('form').simulate('submit');
        expect(mockCallBack).toHaveBeenCalled();
    })
});
