import authReducer from '../authSlice.js';

const initialState = {  
    token: {                
        value: '',
        expiresIn: 0,
        expireStart: 0,
        expireEnd: 0
    },
    isLoading: false,
    hasError: false,
    errorMsg: ''
};  

describe('stateManagement/authSlice/reducer', () => {
  it('should have initial state', () => {
    expect(authReducer()).toEqual(initialState);
  });
  
});