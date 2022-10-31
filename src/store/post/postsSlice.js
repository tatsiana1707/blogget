import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postAction';


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
    changePage: (state, action) => {
      console.log('action', action);
      console.log('page success', state.data);
      state.page = action.payload;
      state.isLast = false;
      state.data = [];
      state.error = '';
      state.after = '';
    },
    loading: (state) => {
      state.loading = true;
    }
  },
  extraReducers: {
    [postRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postRequestAsync.fulfilled.type]: (state, action) => {
      console.log('data success', state);
      console.log('action', action);
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.data = action.payload.data;
    },
    [postRequestAsync.rejected.type]: (state) => {
      state.loading = false;
      state.error = 'error';
    },
  }
});
console.log(postsSlice);
export const {changePage, loading} = postsSlice.actions;
export default postsSlice.reducer;
