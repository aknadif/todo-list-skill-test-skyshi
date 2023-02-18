export interface DetailInitialState {
    detail:{
        isLoading: boolean;
        isError: boolean;
        isSuccess: boolean;
        errorMessage: string;
        data: [];
    },
    detailAdd:{
        isLoading: boolean;
        isError: boolean;
        isSuccess: boolean;
        errorMessage: string;
        isShow: boolean;
        title: string;
        priority: 'very-high' | 'high' | 'normal' | 'low' | 'very-low';
    },
    detailEdit:{
        isLoading: boolean;
        isError: boolean;
        isSuccess: boolean;
        errorMessage: string;
        isShow: boolean;
        id: number;
        title: string;
        priority: 'very-high' | 'high' | 'normal' | 'low' | 'very-low';
    },
    detailDelete:{
        id: number,
        title: string;
        isShow: boolean;
        isLoading: boolean;
        isError: boolean;
        isSuccess: boolean;
        errorMessage: string
    },
    isTitleEdit: boolean;
    title: string;
    isDeleteSuccess: boolean;
}
