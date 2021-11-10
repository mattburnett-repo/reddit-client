import { shallow } from 'enzyme';
import FilterDisplay from '../../components/filter/FilterDisplay';

describe('FilterDisplay', () => {
    const mockCallBack = jest.fn();

    it('renders sucessfully', () => {
        let wrapper = shallow(<FilterDisplay handleClick={mockCallBack} />);
        let text = wrapper.find('nav');

        expect(text.length).toBe(1);

        expect(wrapper.find('button').at(0).text()).toContain('Best');
        expect(wrapper.find('button').at(1).text()).toContain('Controversial');
        expect(wrapper.find('button').at(2).text()).toContain('Hot');
        expect(wrapper.find('button').at(3).text()).toContain('New');
        expect(wrapper.find('button').at(4).text()).toContain('Rising');
        expect(wrapper.find('button').at(5).text()).toContain('Top');
    });
    it('responds to six onClick events', () => {
        let wrapper = shallow(<FilterDisplay handleClick={mockCallBack} />);

        expect(wrapper.find("button").length).toBe(6);

        //  start at beginning of button array, click for each element of array
        //      then check the total number of clicks?
        //  I'm not really sure how this works, but it simulates clicks and keeps
        //      track of how many
        wrapper.find('button').at(0).simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(6);
    })
})