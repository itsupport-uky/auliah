import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import {
  getPesan,
  addPesan,
} from '../../services/rsvpApi';

export const fetchPesan =
  createAsyncThunk(
    'rsvp/fetchPesan',
    async (_, thunkAPI) => {
      try {
        return await getPesan();
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const createPesan =
  createAsyncThunk(
    'rsvp/createPesan',
    async (payload, thunkAPI) => {
      try {
        return await addPesan(payload);
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

const initialState = {
  wishes: [],
  loading: false,
  submitting: false,
  error: null,
};

const rsvpSlice = createSlice({
  name: 'rsvp',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // GET
      .addCase(fetchPesan.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        fetchPesan.fulfilled,
        (state, action) => {
          state.loading = false;
          state.wishes = action.payload;
        }
      )

      .addCase(
        fetchPesan.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )

      // POST
      .addCase(
        createPesan.pending,
        (state) => {
          state.submitting = true;
        }
      )

      .addCase(
        createPesan.fulfilled,
        (state, action) => {
          state.submitting = false;
          state.wishes.unshift(action.payload);
        }
      )

      .addCase(
        createPesan.rejected,
        (state, action) => {
          state.submitting = false;
          state.error = action.payload;
        }
      );
  },
});

export default rsvpSlice.reducer;