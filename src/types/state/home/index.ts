export interface HomeInitialStateProps {
    home:{
        isError: boolean,
        isLoading: boolean,
        isSuccess: boolean,
        errorMessage: string,
        data:[],
    },
    updateActivity:{
        isError: boolean,
        isLoading: boolean,
        isSuccess: boolean,
        errorMessage: string,
        title: string,
    },
    addActivity:{
        isError: boolean,
        isLoading: boolean,
        isSuccess: boolean,
        errorMessage: string,
    }
    confirmationState:{
        isError: boolean,
        isLoading: boolean,
        isSuccess: boolean,
        errorMessage: string,
        isShow: boolean,
        id: number,
        title: string
    }
}
