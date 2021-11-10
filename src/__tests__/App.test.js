// RTL / Enzyme / Selenium

// The application will allow users to view and search posts and comments provided by the API.

// Write unit tests for your components using Jest and Enzyme
// Filter / Listing / Listings / Search

// Write end-to-end tests for your application
//      ???
//      Selenium?

// import App from '../App';

import { useSelector } from 'react-redux';
import { selectAuthToken } from '../stateManagement/authSlice';
import { selectListings } from '../stateManagement/listingsSlice';

describe('App', (() => {
    it('retrieves an auth token', (() => {
        expect(() => useSelector(selectAuthToken)).not.toBe('');
    }));
    it('loads data on startup', (() => {
        expect(() => useSelector(selectListings)).not.toBe('');
    }));
    it('allows users to view posts', (() => {       // render app and look for listings. Listings component
        expect(true).toBe(false);
    }));
    it('allows users to view comments', (() => {     // render app and look for comments. Comments component
        expect(true).toBe(false);
    }));
    it('allows users to choose from pre-determined categories', (() => {    // Filter component
        expect(true).toBe(false);
    }));
    it('allows users to search posts', (() => {                             // Search component
        expect(true).toBe(false);
    }));
    it('allows users to search comments', (() => {                          // Search component
        expect(true).toBe(false);
    }));
}));

