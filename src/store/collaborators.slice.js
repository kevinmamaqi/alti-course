import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('Home/fetchUsers', async () => {
	try {
		const response = await fetch(url);
		const users = await response.json();
		return users;
	} catch (error) {
		console.error(error);
	}
});

export const collaboratorsSlice = createSlice({
	name: 'collaborators',
	initialState: {
		status: 'INITIAL',
		users: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.status = 'PENDING';
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.users = action.payload;
			state.status = 'SUCCESS';
		});
		builder.addCase(fetchUsers.rejected, (state) => {
			state.status = 'ERROR';
		});
	},
});


export default collaboratorsSlice.reducer;
