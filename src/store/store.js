import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user.slice';
import modalReducer from './modal.slice';

const store = configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
	},
});

export default store;
