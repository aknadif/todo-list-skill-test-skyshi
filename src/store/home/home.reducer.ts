import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HomeInitialStateProps} from '@/types/state/home';
import * as process from 'process';


const API_URL = process.env.BASE_API_URL;
const ACTIVITY_URL = process.env.ACTIVITY_URL;

const initialState: HomeInitialStateProps = {
    home:{
        isError: false,
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
        data: []
    },
    updateActivity:{
        isError: false,
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
        title: ''
    },
    addActivity:{
        isError: false,
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    confirmationState:{
        isError: false,
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
        isShow: false,
        title: '',
        id: 0
    }
};

// Get All Activity
export const resolveGetAllActivity = createAsyncThunk(
    'home/resolveGetAllActivity',
    async () => {
        try {
            return await fetch(`${API_URL}/${ACTIVITY_URL}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json());
        } catch (error) {
            return error;
        }
    }
);

// Add Activity
export const resolveAddActivity = createAsyncThunk(
    'home/resolveAddActivity',
    async () => {
        try {
            return await fetch(`${API_URL}/${ACTIVITY_URL}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'New Activity',
                    email: process.env.EMAIL,
                    created_at: new Date(),
                })
            }).then((response) => response.json());
        } catch (error) {
            return error;
        }
    }
);

// Update Activity
export const resolveUpdateActivity = createAsyncThunk(
    'home/resolveUpdateActivity',
    async ({
        id,
        title
    }:{
        id: number,
        title: string
    }) => {
        try {
            return await fetch(`${API_URL}/activity-groups/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                })
            }).then((response) => response.json());
        }
        catch (error) {
            return error;
        }
    }
);

// Delete Activity
export const resolveDeleteActivity = createAsyncThunk(
    'home/resolveDeleteActivity',
    async (id: number) => {
        try {
            return await fetch(`${API_URL}/activity-groups/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json());
        }
        catch (error) {
            return error;
        }
    }
);



export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    extraReducers: (builder) => {

        // Get All Activity
        builder.addCase(resolveGetAllActivity.pending, (state) => {
            state.home.isLoading = true;
            state.home.isError = false;
        });
        builder.addCase(resolveGetAllActivity.fulfilled, (state: any, {payload}) => {
            state.home.isLoading = false;
            state.home.isSuccess = true;
            state.home.data = payload?.data;
        });
        builder.addCase(resolveGetAllActivity.rejected, (state, {payload}: any) => {
            state.home.isLoading = false;
            state.home.isError = true;
            state.home.errorMessage = payload?.message || 'Something went wrong';
        });

        // Add Activity
        builder.addCase(resolveAddActivity.pending, (state) => {
            state.addActivity.isLoading = true;
            state.addActivity.isError = false;
        });
        builder.addCase(resolveAddActivity.fulfilled, (state: any, {payload}) => {
            state.addActivity.isLoading = false;
            state.addActivity.isSuccess = true;
        });
        builder.addCase(resolveAddActivity.rejected, (state, {payload}: any) => {
            state.addActivity.isLoading = false;
            state.addActivity.isError = true;
            state.addActivity.errorMessage = payload?.message || 'Something went wrong';
        });

        // Update Activity
        builder.addCase(resolveUpdateActivity.pending, (state) => {
            state.updateActivity.isLoading = true;
            state.updateActivity.isError = false;
        });
        builder.addCase(resolveUpdateActivity.fulfilled, (state: any, {payload}) => {
            state.updateActivity.isLoading = false;
            state.updateActivity.isSuccess = true;
        });
        builder.addCase(resolveUpdateActivity.rejected, (state, {payload}: any) => {
            state.updateActivity.isLoading = false;
            state.updateActivity.isError = true;
            state.updateActivity.errorMessage = payload?.message || 'Something went wrong';
        });

        // Delete Activity
        builder.addCase(resolveDeleteActivity.pending, (state) => {
            state.confirmationState.isLoading = true;
            state.confirmationState.isError = false;
        });
        builder.addCase(resolveDeleteActivity.fulfilled, (state: any, {payload}) => {
            state.confirmationState.isLoading = false;
            state.confirmationState.isSuccess = true;
            state.confirmationState.data = payload?.data;
        });
        builder.addCase(resolveDeleteActivity.rejected, (state, {payload}: any) => {
            state.confirmationState.isLoading = false;
            state.confirmationState.isError = true;
            state.confirmationState.errorMessage = payload?.message || 'Something went wrong';
        });


    },
    reducers: {
        setConfirmationState: (state, {payload}) => {
            state.confirmationState = payload;
        }
    },
});

export const {
    setConfirmationState
} = homeSlice.actions;
export default homeSlice.reducer;
