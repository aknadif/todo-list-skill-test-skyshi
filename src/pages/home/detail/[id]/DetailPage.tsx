import React from 'react';
import cx from 'classnames';
import {Button, CImage, DropdownSort, Loading, Modal, ModalConfirmation, TextHeader, TodoItem} from '@/components';
import useDetail from '@/hooks/detail/useDetail';
import {GetDetailResponse} from '@/types/res/detail';

const DetailPage = () => {
    const {
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
            handleOpen,
            handleEdit,
            filterData,
            setSelected,
            handleClose,
            handleCancel,
            handleDelete,
            handleActived,
            handleAddTodo,
            handleSetTitle,
            handleGetDetail,
            handleTitleEdit,
            handleCancelEdit,
            handleUpdateTodo,
            handleShowConfirm,
            handleIsTitleEdit,
        }
    } = useDetail();
    React.useEffect(() => {
        handleGetDetail(Number(id));
    }, [id]);

    let dataDetailSort = detail?.data?.slice();
    return (
        <>
            <Modal
                isLoading={false}
                onSave={handleAddTodo}
                type={'add'}
                isOpen={detailAdd.isShow}
                onClose={handleClose}
            />
            <Modal
                isLoading={false}
                onSave={handleUpdateTodo}
                type={'edit'}
                isOpen={detailEdit.isShow}
                value={detailEdit.title}
                priority={detailEdit.priority}
                onClose={handleCancelEdit}
            />
            <ModalConfirmation
                isLoading={detailDelete.isLoading}
                disabled={detailDelete.isLoading}
                type={'list'}
                isOpen={detailDelete.isShow}
                title={detailDelete.title}
                onClose={handleCancel}
                onSubmit={handleDelete}
            />
            <div className={cx('px-52 py-11 transition')}>
                <div className={cx('flex justify-between items-center mb-12')}>
                    <div className={cx('flex justify-center items-center gap-4')}>
                        <div
                            onClick={()=>{router.back();}}
                            data-cy={'todo-back-button'}
                            className={cx('hover:scale-105 cursor-pointer')}>
                            <CImage
                                src={'/Assets/Icons/IC-leftarrow.webp'}
                                alt={'Icon back button'}
                                width={32}
                                height={32}/>
                        </div>
                        {isTitleEdit ? (
                            <input
                                data-cy={'todo-title-input'}
                                className={cx('text-4xl font-bold ' +
                                    'focus:border-b-4 py-2 focus:border-bluePrimary focus:outline-none')}
                                defaultValue={title === ''?
                                    paramsTitle: title}
                                onChange={(event)=>{
                                    handleSetTitle(event.target.value);
                                }}
                                autoFocus={true}
                                onBlur={()=>{
                                    handleIsTitleEdit();
                                    handleTitleEdit(id, title);
                                }}
                            />
                        ) : (
                            <TextHeader
                                onClick={handleIsTitleEdit}
                                title={title === ''?
                                    paramsTitle: title}
                                data-cy={'todo-title'}/>
                        )}
                        <div
                            onClick={handleIsTitleEdit}
                            data-cy={'todo-title-edit-button'}
                            className={cx('hover:scale-105 cursor-pointer')}>
                            <CImage
                                src={'/Assets/Icons/IC-edit.webp'}
                                alt={'Icon edit'}
                                width={24}
                                height={24}/>
                        </div>
                    </div>
                    <div className={cx('flex justify-center items-center gap-2')}>
                        {detail?.data.length !== 0 &&
                            <DropdownSort
                                sorts={sorts}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        }
                        <Button
                            type={'add'}
                            data-cy={'todo-add-state'}
                            onClick={handleOpen}
                        />
                    </div>
                </div>

                {detail.isLoading && (
                    <div
                        data-cy={'todo-loading-state'}
                        className={cx('flex justify-center items-center h-screen -mt-[200px]')}>
                        <Loading type={'blue'}/>
                    </div>
                )}

                {detail?.data.length !== 0 && (
                    <div className={cx('w-full h-full flex flex-col gap-5')}>

                        {filterData(selected.value, dataDetailSort).map((item:GetDetailResponse, index:number) => (
                            <TodoItem
                                onCheck={handleActived}
                                key={index}
                                id={Number(item.id)}
                                title={item.title}
                                priority={item.priority}
                                isActive={item.is_active}
                                onEdit={handleEdit}
                                onDelete={() => handleShowConfirm(item.title, Number(item.id))}
                            />
                        ))}


                        {/*{dataDetailSort.sort((a: any, b: any) => a.title.localeCompare(b.title))*/}
                        {/*    .map((item:GetDetailResponse, index:number) => (*/}
                        {/*        <TodoItem*/}
                        {/*            onCheck={handleActived}*/}
                        {/*            key={index}*/}
                        {/*            id={Number(item.id)}*/}
                        {/*            title={item.title}*/}
                        {/*            priority={item.priority}*/}
                        {/*            isActive={item.is_active}*/}
                        {/*            onEdit={handleEdit}*/}
                        {/*            onDelete={() => handleShowConfirm(item.title, Number(item.id))}*/}
                        {/*        />*/}
                        {/*    ))}*/}
                    </div>
                )}

                {!detail.isLoading && detail?.data.length === 0 && (
                    <div
                        onClick={handleOpen}
                        data-cy={'todo-empty-state'}
                        className={cx('flex justify-center items-center cursor-pointer')}>
                        <CImage
                            src={'/Assets/img/todo-empty-state.webp'}
                            alt={'image empty state'}
                            width={541}
                            height={413} />
                    </div>
                )}
            </div>
        </>
    );
};

export default DetailPage;
