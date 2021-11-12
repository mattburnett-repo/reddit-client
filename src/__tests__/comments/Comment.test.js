import { shallow } from 'enzyme';
import Comment from '../../components/comments/Comment'

const mockData = 
    {
        'article_id': 'article_id_01',
        'data.id': 'comment_id_01',
        author: 'comment_author_01',
        title: 'comment_title_01',
        body: 'comment_body_01'
    };

describe('Comment component', () => {
    it('renders successfully with mock data', () => {
        let wrapper = shallow(<Comment comment={mockData} />);
        let text = wrapper.find('h3').text();

        expect(text).toEqual('Comment');
    });
    it('displays comment data', (() => {
        let wrapper = shallow(<Comment comment={mockData} />);
        expect(wrapper.contains('test title 01')).toBe(true);
    }))
});
