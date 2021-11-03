// import { render, screen } from '@testing-library/react';
import { store, getItems, getItemById, filterItems, searchItems } from '../stateManagement/store';

// sort out the async stuff / get Reddit API access working,
//      then go back over Redux testing infos and build some
//          tests here

describe('Basic store stub functionality', () => {
    it('returns test string from getItems', () => {
        let result = store.dispatch(getItems());
        expect(result.payload).toBe('???');
    });
    it('gets an item by id', () => {
        let result = store.dispatch(getItemById(2));
        expect(result.payload).toBe(2);
    });
    it('filters using a filter item', () => {
        let response = store.dispatch(filterItems('filter term'));
        expect(response.payload).toBe('filter term');
    });
    it('searches using a search term', () => {
        let response = store.dispatch(searchItems('search term'));
        expect(response.payload).toBe('search term');
    });
});