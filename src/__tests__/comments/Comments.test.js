// Write unit tests for your components using Jest and Enzyme
// ... cannot read properties of undefined reading 'getState') ...

// https://www.andreasreiterer.at/test-presentational-components-jest/

import { shallow } from 'enzyme';

import Comments from '../../features/comments/Comments';
import CommentList from '../../components/comments/CommentList';

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

describe('Comments component', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<Comments />)
        let text = wrapper.find('h3').text();

        expect(text).toEqual('Comments');
    });
    it('contains a CommentList component', () => {
        let wrapper = shallow(<Comments />)
        let text = wrapper.find(CommentList); 

        expect(text.length).toBe(1);
    })
});


