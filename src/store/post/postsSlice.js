import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    postRequestSuccess: (state, action) => {
      console.log('action', action);
      console.log('action', action.payload.data.after);
      state.loading = false;
      state.data = action.payload.data.children;
      state.error = '';
      state.after = action.payload.data.after;
      state.isLast = !action.payload.data.after;
    },
    postRequestSuccessAfter: (state, action) => {
      console.log('action', action);
      console.log('action', action.payload.data.after);
      state.loading = false;
      state.after = action.payload.data.after;
      state.isLast = !action.payload.data.after;
      state.data = [...state.data, ...action.payload.data.children];
      state.error = '';
    },
    postRequestError: (state) => {
      state.loading = false;
      state.error = 'error';
    },
    changePage: (state, action) => {
      console.log('action', action);
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
  }
});
console.log(postsSlice);

export default postsSlice.reducer;

