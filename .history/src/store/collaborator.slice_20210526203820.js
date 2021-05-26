import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// The process to fetch some data
// 1. YOU HAVE TO LAUNCH THE FETCH. IT WILL BE PENDING.
// 2. IT CAN BE SUCCESSFUL
// 3. IT CAN BE AN ERROR

// First, create the thunk
const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchArticles = createAsyncThunk('collaborator/fetchUsers', async () => {
	try {
		const response = await fetch(url);
		const users = await response.json();
		return users;
	} catch (error) {
		console.error(error);
	}
});

export const userSlice = createSlice({
	name: 'users',
	initialState: {
		status: 'INITIAL',
		articles: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.status = 'PENDING';
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.articles = action.payload;
			state.status = 'SUCCESS';
		});
		builder.addCase(fetchUsers.rejected, (state) => {
			state.status = 'ERROR';
		});
	},
});

// export const {} = blogSlice.actions;

export default userSlice.reducer;
