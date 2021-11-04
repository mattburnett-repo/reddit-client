// import { render, screen } from '@testing-library/react';
import { itemsSlice } from '../components/items/itemsSlice';
import { store } from '../stateManagement/store';

// sort out the async stuff / get Reddit API access working,
//      then go back over Redux testing infos and build some
//          tests here

describe('Basic store stub functionality', () => {
    it('returns test string from getItems', () => {
        // store.items.actions.getItems...
        let result = store.dispatch(itemsSlice.reducer.loadData);
        expect(result).toBe('???');
    });
    // it('gets an item by id', () => {
    //     let result = store.dispatch('items/getItemById');
    //     expect(result.payload).toBe(2);
    // });
    // it('filters using a filter item', () => {
    //     let response = store.dispatch('items/filterItems');
    //     expect(response.payload).toBe('filter term');
    // });
    // it('searches using a search term', () => {
    //     let response = store.dispatch('items/searchItems');
    //     expect(response.payload).toBe('search term');
    // });
});