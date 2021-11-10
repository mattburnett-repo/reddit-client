import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../features/auth/authSlice';

describe('Auth', () => {
    it('retrieves an auth token', (() => {
        expect(() => useSelector(selectAuthToken)).not.toBe('');
    }));
})