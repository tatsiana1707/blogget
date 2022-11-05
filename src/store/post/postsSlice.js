import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postAction';


const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
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
      state.error = '';
    },
    [postRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
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

export default postsSlice.reducer;
