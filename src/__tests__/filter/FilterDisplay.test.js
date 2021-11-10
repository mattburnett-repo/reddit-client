import { shallow } from 'enzyme';
import FilterDisplay from '../../components/filter/FilterDisplay';

const dummyFunction = (filterTerm) => {
    return filterTerm;
}

describe('FilterDisplay', () => {
    it('renders sucessfully', () => {
        let wrapper = shallow(<FilterDisplay handleClick={dummyFunction} />);
        let text = wrapper.find('nav');

        expect(text.length).toBe(1);
    });
    it('responds tow onClick events', () => {
        expect(true).toBe(false);
        // https://github.com/enzymejs/enzyme/blob/master/docs/api/ShallowWrapper/simulate.md#example
        // const wrapper = shallow(<FilterDisplay />);
        // expect(wrapper.find('best').length).toBe(1);
    })
})