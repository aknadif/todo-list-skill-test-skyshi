import {combineReducers, configureStore,} from '@reduxjs/toolkit';
import homeReducer from '@/store/home/home.reducer';
import detailReducer from '@/store/detail/detail.reducer';

const rootReducer = combineReducers({
    home : homeReducer,
    detail: detailReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export default store;
