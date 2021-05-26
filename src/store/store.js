import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter.slice';
import blogReducer from './blog.slice';
import modalReducer from './modal.slice';
import collaboratorsReducer from './collaborators.slice';

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
	collaborators:{
		users: [],
		status: 'INITIAL',
		active:{
			
		}
	}
};

const store = configureStore({
	reducer: {
		counter: counterReducer,
		blog: blogReducer,
		modal: modalReducer,
		collaborators: collaboratorsReducer,
	},
});

export default store;
