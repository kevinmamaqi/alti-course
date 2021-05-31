import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('USERS_FETCHALL', async () => {
	try {
		const response = await fetch(url);
		const users = await response.json();
		return users;
	} catch (error) {
		console.error(error);
	}
});

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		status: 'INITIAL',
		entities: [],
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.status = 'PENDING';
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			console.log(action.type);
			state.status = 'SUCCESS';
			state.entities = action.payload;
		});
		builder.addCase(fetchUsers.rejected, (state) => {
			state.status = 'REJECTED';
		});
	},
});

export default usersSlice.reducer;
