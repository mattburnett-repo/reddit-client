import { shallow } from 'enzyme';
import Comment from '../../components/comments/Comment'

const mockData = 
    {
        id: 'test id 01',
        article_id: 'test article id 01',
        title: 'test title 01'
    };

describe('Comment component', () => {
    it('renders successfully', () => {
        let wrapper = shallow(<Comment comment={mockData} />);
        let text = wrapper.find('h3').text();

        expect(text).toEqual('Comment');
    });
    it('displays comment data', (() => {
        let wrapper = shallow(<Comment comment={mockData} />);
        expect(wrapper.contains('test title 01')).toBe(true);
    }))
});
