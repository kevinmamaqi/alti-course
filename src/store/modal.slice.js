import {createSlice} from '@reduxjs/toolkit';

export const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isActive: false,
		headerContent: undefined,
		bodyContent: undefined,
	},
	reducers: {
		launchModal: (state, action) => {
			console.log(action);
			state.isActive = true;
			state.headerContent = action.payload.headerContent;
			state.bodyContent = action.payload.bodyContent;
		},
		closeModal: (state) => {
			state.isActive = false;
			state.headerContent = undefined;
			state.bodyContent = undefined;
		},
	},
});

export const {launchModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;
