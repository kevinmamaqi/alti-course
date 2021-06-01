import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter.slice';
import blogReducer from './blog.slice';
import modalReducer from './modal.slice';

const myStore = {
	counter: {
		value: 0,
	},
	blog: {
		articles: [],
		status: 'INITIAL',
	},
	modals: [],
};

const store = configureStore({
	reducer: {
		counter: counterReducer,
		blog: blogReducer,
		modal: modalReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export default store;
