import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {DetailInitialState} from '@/types/state/detail';
import * as process from 'process';


const API_URL = process.env.BASE_API_URL;
const TODO_URL = process.env.TODO_URL;

const initialState:DetailInitialState = {
    detail:{
        isLoading: false,
        isError: false,
        isSuccess: false,
        errorMessage: '',
        data: []
    },
    detailAdd:{
        isShow: false,
        isLoading: false,
        isError: false,
        isSuccess: false,
        errorMessage: '',
        title: '',
        priority: 'very-high'
    },
    detailEdit:{
        isShow: false,
        isLoading: false,
        isError: false,
        isSuccess: false,
        errorMessage: '',
        id: 0,
        title: '',
        priority: 'very-high'
    },
    detailDelete:{
        id: 0,
        title: '',
        isShow: false,
        isLoading: false,
        isError: false,
        isSuccess: false,
        errorMessage: ''
    },
    isTitleEdit: false,
    title: '',
};

// Get list detail
export const resolveGetDetail = createAsyncThunk(
    'detail/resolveGetDetail',
    async (id:number, {rejectWithValue}) => {
        try {
            return await fetch(`${API_URL}/${TODO_URL}=${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json());
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Add detail
export const resolveAddDetail = createAsyncThunk(
    'detail/resolveAddDetail',
    async (data:{
        activity_group_id: number,
        title: string,
        priority: 'very-high' | 'high' | 'normal' | 'low' | 'very-low',
        is_active: boolean,
        created_at: string,
    }, {rejectWithValue}) => {
        try {
            return await fetch(`${API_URL}/todo-items`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then((response) => response.json());
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Update Detail
export const resolveEditDetail = createAsyncThunk(
    'detail/resolveEditDetail',
    async (data:{
        id?: number,
        activity_group_id?: number,
        title?: string,
        priority?: 'very-high' | 'high' | 'normal' | 'low' | 'very-low',
        is_active?: boolean,
        created_at?: string,
    }, {rejectWithValue}) => {
        try {
            return await fetch(`${API_URL}/todo-items/${data.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then((response) => response.json());
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Delete Detail
export const resolveDeleteDetail = createAsyncThunk(
    'detai/resolveDeleteDetail',
    async (id:number, {rejectWithValue})=>{
        try {
            return await fetch(`${API_URL}/todo-items/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => response.json());
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const detailSlice = createSlice({
    name: 'detail',
    initialState: initialState,
    extraReducers: (builder) => {
        // Get All Detail
        builder.addCase(resolveGetDetail.pending, (state) => {
            state.detail.isLoading = true;
            state.detail.isError = false;
        });
        builder.addCase(resolveGetDetail.fulfilled, (state: any, {payload}) => {
            state.detail.isLoading = false;
            state.detail.isSuccess = true;
            state.detail.data = payload?.data;
        });
        builder.addCase(resolveGetDetail.rejected, (state, {payload}: any) => {
            state.detail.isLoading = false;
            state.detail.isError = true;
            state.detail.errorMessage = payload?.message || 'Something went wrong';
        });

        // Add Detail
        builder.addCase(resolveAddDetail.pending, (state) => {
            state.detailAdd.isLoading = true;
            state.detailAdd.isError = false;
        });
        builder.addCase(resolveAddDetail.fulfilled, (state: any, {payload}) => {
            state.detailAdd.isLoading = false;
            state.detailAdd.isSuccess = true;
            state.detailAdd.data = payload?.data;
        });
        builder.addCase(resolveAddDetail.rejected, (state, {payload}: any) => {
            state.detailAdd.isLoading = false;
            state.detailAdd.isError = true;
            state.detailAdd.errorMessage = payload?.message || 'Something went wrong';
        });

        // Edit Detail
        builder.addCase(resolveEditDetail.pending, (state) => {
            state.detailEdit.isLoading = true;
            state.detailEdit.isError = false;
        });
        builder.addCase(resolveEditDetail.fulfilled, (state: any, {payload}) => {
            state.detailEdit.isLoading = false;
            state.detailEdit.isSuccess = true;
            state.detailEdit.data = payload?.data;
        });
        builder.addCase(resolveEditDetail.rejected, (state, {payload}: any) => {
            state.detailEdit.isLoading = false;
            state.detailEdit.isError = true;
            state.detailEdit.errorMessage = payload?.message || 'Something went wrong';
        });

        // Delete Detail
        builder.addCase(resolveDeleteDetail.pending, (state) => {
            state.detailDelete.isLoading = true;
            state.detailDelete.isError = false;
        });
        builder.addCase(resolveDeleteDetail.fulfilled, (state: any, {payload}) => {
            state.detailDelete.isLoading = false;
            state.detailDelete.isSuccess = true;
        });
        builder.addCase(resolveDeleteDetail.rejected, (state, {payload}: any) => {
            state.detailDelete.isLoading = false;
            state.detailDelete.isError = true;
            state.detailDelete.errorMessage = payload?.message || 'Something went wrong';
        });

    },
    reducers: {
        setClearState: (state) => {
            state = initialState;
        },
        setDetailAdd: (state, {payload}) => {
            state.detailAdd = {
                ...state.detailAdd,
                ...payload
            };
        },
        setDetailEdit: (state, {payload}) => {
            state.detailEdit = {
                ...state.detailAdd,
                ...payload
            };
        },
        setDetailDelete: (state, {payload}) => {
            state.detailDelete = {
                ...state.detailAdd,
                ...payload
            };
        },
        setIsTitleEdit: (state) => {
            state.isTitleEdit = !state.isTitleEdit;
        },
        setTitle: (state, {payload}) => {
            state.title = payload;
        },
    },
});

export const {
    setTitle,
    setDetailAdd,
    setClearState,
    setDetailEdit,
    setIsTitleEdit,
    setDetailDelete,
} = detailSlice.actions;
export default detailSlice.reducer;
