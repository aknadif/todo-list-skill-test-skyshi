import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {
    resolveAddDetail,
    resolveDeleteDetail,
    resolveEditDetail,
    resolveGetDetail,
    setClearState,
    setDetailAdd,
    setDetailDelete,
    setDetailEdit,
    setIsTitleEdit,
    setTitle,
} from '@/store/detail/detail.reducer';
import {AppDispatch} from '@/store/app.store';
import {resolveUpdateActivity} from '@/store/home/home.reducer';
import {useState} from 'react';

const useDetail = () => {
    const router = useRouter();
    const id = Number(router.query.id);
    const paramsTitle = router?.query?.title?.toString();
    const dispatch = useDispatch<AppDispatch>();

    const sorts:{
        id: number;
        name: string;
        value: 'asc' | 'desc' | 'newest' | 'oldest' | 'unfinished';
        src: string;
    }[] = [
        {id: 1, name: 'Terbaru', value:'newest', src: '/Assets/Icons/IC-newest.webp'},
        {id: 2, name: 'Terlama', value:'oldest', src: '/Assets/Icons/IC-oldest.webp'},
        {id: 3, name: 'A-Z', value:'asc', src: '/Assets/Icons/IC-asc.webp'},
        {id: 4, name: 'Z-A', value:'desc', src: '/Assets/Icons/IC-desc.webp'},
        {id: 5, name: 'Belum Selesai', value:'unfinished', src: '/Assets/Icons/IC-not-done.webp'},
    ];
    const [selected, setSelected] = useState(sorts[0]);

    const {
        title,
        detail,
        detailAdd,
        detailEdit,
        isTitleEdit,
        detailDelete,
    } = useSelector((state: any) => state.detail);

    const filterData = (filter: 'asc' | 'desc' | 'newest' | 'oldest' | 'unfinished', data:[]) => {
        switch (filter) {
        case 'asc':
            return data.sort((a: any, b: any) => a.title.localeCompare(b.title));
        case 'desc':
            return data.sort((a: any, b: any) => b.title.localeCompare(a.title));
        case 'newest':
            return data.sort((a: any, b: any) => b.id - a.id);
        case 'oldest':
            return data.sort((a: any, b: any) => a.id - b.id);
        case 'unfinished':
            return data.sort((a: any, b: any) => b.is_active - a.is_active);
        default:
            return data;
        }
    };

    // Clear State
    const handleClearState = () => {
        dispatch(setClearState());
    };

    const handleGetDetail = (id: number) => {
        dispatch(resolveGetDetail(id));
    };

    // Edit Title
    const handleIsTitleEdit = () => {
        dispatch(setIsTitleEdit());
    };


    const handleSetTitle = (title: string) => {
        dispatch(setTitle(title));
    };

    const handleTitleEdit = (id: number, title: string) => {
        dispatch(resolveUpdateActivity({
            id,
            title,
        }))
            .then(() => handleGetDetail(id));
    };

    // Add
    const handleOpen = () => {
        dispatch(setDetailAdd({
            isShow: true,
        }));
    };

    const handleClose = () => {
        dispatch(setDetailAdd({
            isShow: false,
        }));
    };

    const handleAddTodo = (title?:string, priority?: 'very-high' | 'high' | 'normal' | 'low' | 'very-low') => {
        dispatch(resolveAddDetail({
            activity_group_id: id!,
            title: title!,
            priority: priority!,
            is_active: true,
            created_at: new Date().toString(),
        }))
            .then(()=> handleGetDetail(id))
            .finally(()=> {
                handleClearState();
                handleClose();
            });
    };

    // Edit
    const handleEdit = (id:number, title: string, priority: 'very-high' | 'high' | 'normal' | 'low' | 'very-low') => {
        dispatch(setDetailEdit({
            isShow: true,
            id,
            title,
            priority,
        }));
    };

    const handleCancelEdit = () => {
        dispatch(setDetailEdit({
            isShow: false,
        }));
    };

    const handleUpdateTodo = (
        title?: string,
        priority?: 'very-high' | 'high' | 'normal' | 'low' | 'very-low',
    ) => {
        dispatch(resolveEditDetail({
            id: detailEdit.id,
            title: title,
            priority: priority,
            created_at: new Date().toString(),
            activity_group_id:  Number(router.query.id)
        }))
            .then(()=> handleGetDetail(id))
            .finally(()=> {
                handleClearState();
                handleCancelEdit();
            });
    };

    const handleActived = (id: number, is_active: boolean) => {
        dispatch(resolveEditDetail({
            id,
            is_active: !is_active,
        }))
            .finally(()=> handleGetDetail(Number(router.query.id)));
    };

    // Confirmation Delete
    const handleShowConfirm = (title: string, id: number) => {
        dispatch(setDetailDelete({
            isShow: true,
            title,
            id
        }));
    };

    const handleCancel = () => {
        dispatch(setDetailDelete({
            isShow: false,
        }));
    };

    const handleDelete = () => {
        dispatch(resolveDeleteDetail(detailDelete.id))
            .then(()=> handleGetDetail(id))
            .finally(()=> {
                handleClearState();
                handleCancel();
            });
    };

    return {
        data:{
            id,
            title,
            sorts,
            detail,
            router,
            selected,
            detailAdd,
            detailEdit,
            isTitleEdit,
            paramsTitle,
            detailDelete,
        },
        method:{
            handleEdit,
            handleOpen,
            handleClose,
            filterData,
            setSelected,
            handleCancel,
            handleDelete,
            handleAddTodo,
            handleActived,
            handleSetTitle,
            handleGetDetail,
            handleTitleEdit,
            handleCancelEdit,
            handleUpdateTodo,
            handleShowConfirm,
            handleIsTitleEdit,
        }
    };
};

export default useDetail;
