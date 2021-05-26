import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter.slice';
import blogReducer from './blog.slice';
import modalReducer from './modal.slice';
import collaboratorReducer from './collaborator.slice';

const myStore = {
	counter: {
		value: 0,
	},
	blog: {
		articles: [],
		status: 'INITIAL',
	},
	modal: {
		isActive: false,
		headerContent: undefined,
		bodyContent: undefined,
	},
	collaborator: {
		users: [],
	},
};

const store = configureStore({
	reducer: {
		counter: counterReducer,
		blog: blogReducer,
		modal: modalReducer,
		collaborator: collaboratorReducer,
	},
});

export default store;
