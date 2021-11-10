import { shallow } from 'enzyme';

// import Comments from '../../features/comments/Comments';
import CommentsList from '../../components/comments/CommentsList';

// const mockData = [
//     {
//         id: 'test id 01',
//         article_id: 'test article id 01',
//         title: 'test title 01'
//     },
//     {
//         id: 'test id 02',
//         article_id: 'test article id 02',
//         title: 'test title 02'
//     },
//     {
//         id: 'test id 03',
//         article_id: 'test article id 03',
//         title: 'test title 03'
//     }
// ];

// TODO: re do these. Should test CommentsList component and contains Comment component
describe('CommentsList component', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<CommentsList />)
        let text = wrapper.find('h3').text();

        expect(text).toEqual('CommentsList');
    });
    it('contains a CommentList component', () => {
        let wrapper = shallow(<CommentsList />)
        let text = wrapper.find(Comment); 

        expect(text.length).toBe(1);
    })
});


