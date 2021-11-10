import { shallow } from 'enzyme';

import Comment from '../../components/comments/Comment'

describe('Comment component', () => {
    it('renders successfully', () => {
        let wrapper = shallow(<Comment />);
        let text = wrapper.find('h3').text();

        expect(text).toEqual('Comment');
    });
    it('displays comment data', (() => {
        expect(true).toBe(false);
    }))
});
