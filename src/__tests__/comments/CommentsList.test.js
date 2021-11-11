import { shallow } from 'enzyme';

import CommentsList from '../../components/comments/CommentsList';

const mockData = [
    {
        id: 'test id 01',
        article_id: 'test article id 01',
        title: 'test title 01'
    },
    {
        id: 'test id 02',
        article_id: 'test article id 02',
        title: 'test title 02'
    },
    {
        id: 'test id 03',
        article_id: 'test article id 03',
        title: 'test title 03'
    }
];

describe('CommentsList component', () => {
    it('renders correctly when no data elements provided via props', () => {
        let wrapper = shallow(<CommentsList />)
        expect(wrapper.contains('No Comments Today')).toBe(true);
    });
    it('renders three Comment components when three data elements are provided', () => {
        let wrapper = shallow(<CommentsList comments={mockData}/>)
        expect(wrapper.find('Comment').length).toBe(3);
    })
});

// let wrapper = shallow(<ListingsDisplay isLoading={false}  articleListings={mockData} />)
// let text = wrapper.find(Listing); 

// expect(text.find(Listing).length).toBe(3);