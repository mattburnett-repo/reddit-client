// lost and looking for a place to start...
//      let's try: https://create-react-app.dev/docs/running-tests/
//          "smokescreen" test/s
//              test if we have everything from wireframe rendered in App.
//              does this belong in src/setupTests.js?
//
//          "mocking" is for data-handlings?
//          "We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App."
//          "You can also use jest.fn() and expect(fn).toBeCalled() to create “spies” or mock functions."
//
//  look also at index.test.js
// 

import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import { render, screen } from '@testing-library/react';
// import { render, screen, shallow, unmount } from '@testing-library/react';
import { shallow } from 'enzyme';

// jest.mock("react-dom", () => ({ render: jest.fn() }));

import AppDummy from '../AppDummy';
// import App from '../App';
// import store from '../stateManagement/store.js';

import Filter from '../components/Filter';
import Search from '../components/Search';
import Listings from '../components/Listings';

// AppDummy is a very simple, start-of-process smokescreen test
//      it asks, does the App invoke the components shown on the wireframe?
//      using AppDummy because App itself is complicated
//          rendered in index.js, surrounded by Provider tag with store prop
//          look at comm'd out code for ideas on how to render App correctly for these tests
//              expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode><Provider store={store}><App /></ Provider></React.StrictMode>, div);
describe('<AppDummy />', () => {
    describe('should contain', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<AppDummy />);        // use shallow from Enzyme
            // figure out how to correctly render actual App component
            //      Get index.js to render App and return the render to wrapper
            // require("../index.js");
            // wrapper = shallow(<Provider store={store}><App /></Provider>);
        });
        afterEach(() => {
            wrapper.unmount();
        });
        // it("have specific text in the header", () => {
        //     render(<AppDummy />);
        //     expect(screen.getByText('REDDIT')).toBeInTheDocument();
        // });

        it("Filter component", () => {
            expect(wrapper.find(Filter).length).toBe(1);
        });
        it("Search component", () => {
            expect(wrapper.find(Search).length).toBe(1);
        });
        it("Listings component", () => {
            expect(wrapper.find(Listings).length).toBe(1);
        });
    }); // end should contain ...
}); // end AppDummy

    // it("should render from index.js without crashing", () => {
    //     const div = document.createElement("div");
    //     div.id = "root";
    //     document.body.appendChild(div);
    //     require("../index.js");
    //     expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode><Provider store={store}><App /></ Provider></React.StrictMode>, div);
    // });
    // it("should render AppDummy without crashing", () => {
    //     expect(screen.getByText('REDDIT')).toBeInTheDocument();
    // });
    // it("should render App without crashing", () => {
    //     render(<App/>);
    //     expect(screen.getByText('REDDIT')).toBeInTheDocument();
    // });
// })