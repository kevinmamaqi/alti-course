import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('home/fetchUsers', async () => {
	try {
		const response = await fetch(url);
		const users = await response.json();
		return users;
	} catch (error) {
		console.error(error);
	}
});

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		status: 'INITIAL',
		users: [],
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.status = 'PENDING';
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.status = 'SUCCESS';
			state.users = action.payload;
		});
		builder.addCase(fetchUsers.rejected, (state) => {
			state.status = 'REJECTED';
		});
	},
});

export default userSlice.reducer;
