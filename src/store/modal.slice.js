import {createSlice} from '@reduxjs/toolkit';

// const modalProperties = {
// 	isActive: false,
// 	headerContent: undefined,
// 	bodyContent: undefined,
// };

let id = 0;
const updateId = () => id++;

export const modalSlice = createSlice({
	name: 'modal',
	initialState: [],
	reducers: {
		addModal: (state, action) => {
			state.push({
				id: updateId(),
				headerContent: action.payload.headerContent,
				bodyContent: action.payload.bodyContent,
			});
		},
		removeModal: (state, action) => {
			const idx = state.findIndex((modal) => modal.id === action.payload);
			state.splice(idx, 1);
		},
	},
});

export const {addModal, removeModal} = modalSlice.actions;

export default modalSlice.reducer;
