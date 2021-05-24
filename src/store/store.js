import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter.slice';
import blogReducer from './blog.slice';

const myStore = {
	counter: {
		value: 0,
	},
	blog: {
		articles: [],
		status: 'INITIAL',
	},
};

const store = configureStore({
	reducer: {
		counter: counterReducer,
		blog: blogReducer,
	},
});

export default store;
