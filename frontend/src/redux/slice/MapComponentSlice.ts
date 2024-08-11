import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface RoutingState {
  startPoint: [number, number] | null;
  endPoint: [number, number] | null;
  route: [number, number][];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RoutingState = {
  startPoint: null,
  endPoint: null,
  route: [],
  status: 'idle',
  error: null,
};

export const fetchRoute = createAsyncThunk(
  'routing/fetchRoute',
  async ({ startPoint, endPoint }: { startPoint: [number, number]; endPoint: [number, number] }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/route', { startPoint, endPoint });
      return response.data.route; // Assuming the API returns a 'route' array
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const routingSlice = createSlice({
  name: 'routing',
  initialState,
  reducers: {
    setStartPoint(state, action) {
      state.startPoint = action.payload;
    },
    setEndPoint(state, action) {
      state.endPoint = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoute.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoute.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.route = action.payload;
      })
      .addCase(fetchRoute.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setStartPoint, setEndPoint } = routingSlice.actions;

export default routingSlice.reducer;
