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
      state.loading = false;
      state.data = action.payload.data.data.children;
      state.error = '';
      state.after = action.payload.data.data.after;
      state.isLast = !action.payload.data.data.after;
    },
    postRequestSuccessAfter: (state, action) => {
      state.loading = false;
      state.after = action.payload.data.data.after;
      state.isLast = !action.payload.data.data.after;
      state.data = [state.payload.data.data.children,
        ...action.payload.data.data.children];
      state.error = '';
    },
    postRequestError: (state, action) => {
      state.loading = false;
      state.error = 'error';
    },
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
    },
  }
});
console.log(postsSlice);

export default postsSlice.reducer;

