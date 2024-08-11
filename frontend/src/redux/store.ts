import { configureStore } from '@reduxjs/toolkit';
import routingReducer from '@/redux/slice/MapComponentSlice';

const store = configureStore({
  reducer: {
    routing: routingReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
