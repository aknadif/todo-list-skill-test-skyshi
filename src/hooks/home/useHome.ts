import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch} from '@/store/app.store';
import {
    resolveAddActivity,
    resolveDeleteActivity,
    resolveGetAllActivity,
    setConfirmationState,
    setDeleteSuccess,
} from '@/store/home/home.reducer';

const useHome = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {
        home,
        addActivity,
        isDeleteSuccess,
        confirmationState,
    } = useSelector((state: any) => state.home);

    // handle get all activity
    const handleGetAllActivity = async () => {
        dispatch(resolveGetAllActivity());
    };

    // handle add activity
    const handleAddActivity = async () => {
        dispatch(resolveAddActivity())
            .then(() => handleGetAllActivity());
    };

    // handle delete activity
    const handleDeleteActivity = async (id: number) => {
        dispatch(resolveDeleteActivity(id))
            .then(() => {
                handleGetAllActivity();
                handleCancelConfirmation();
            });
    };

    const handleShowConfirmation = (id:number, title:string) => {
        dispatch(setConfirmationState({
            isShow: true,
            title,
            id
        }));
    };

    const handleCancelConfirmation = () => {
        dispatch(setConfirmationState({
            isShow: false,
        }));
    };

    const handleAlertClose = () => {
        dispatch(setDeleteSuccess());
    };

    return {
        data:{
            home,
            addActivity,
            isDeleteSuccess,
            confirmationState
        },
        method:{
            handleAlertClose,
            handleAddActivity,
            handleGetAllActivity,
            handleDeleteActivity,
            handleShowConfirmation,
            handleCancelConfirmation,
        }
    };
};

export default useHome;
