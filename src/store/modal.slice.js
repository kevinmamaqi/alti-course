import {createSlice} from '@reduxjs/toolkit';

export const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		modals: [],
	},
	reducers: {
		launchModal: (state, action) => {
			let modal = {
				id: state.modals.length,
				headerContent: action.payload.headerContent,
				bodyContent: action.payload.bodyContent,
				isInnerModal: action.payload.isInnerModal,
			};
			state.modals.push(modal);
		},
		closeModal: (state, action) => {
			//let modal = state.modals.find(({id}) => id === action.payload.id);
			state.modals.pop();
		},
	},
});

export const {launchModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;
