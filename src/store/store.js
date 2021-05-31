import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './users.slice';
import modalReducer from './modal.slice';

const store = configureStore({
	reducer: {
		users: usersReducer,
		modal: modalReducer,
	},
});

export default store;
