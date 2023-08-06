import { atom, selector } from 'recoil';
import axios from 'axios';

// Atom definition for 'userState'
export const userState = atom({
    key: 'userState',
    default: {
        userId: null,
        username: null,
        firstName: null,
        lastName: null,
    },
});

// Selector definition for 'userDataSelector'
export const userDataSelector = selector({
    key: 'userDataSelector',
    get: async () => {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/me', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return res.data;
    },
});
