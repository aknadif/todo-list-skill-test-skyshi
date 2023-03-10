import React from 'react';
import cx from 'classnames';
import {Alert, Button, Card, CImage, Loading, ModalConfirmation, TextHeader} from '@/components';
import useHome from '@/hooks/home/useHome';
import {ActivityRes} from '@/types/res/activity';

const HomePage = () => {
    const {
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
            handleCancelConfirmation
        }
    } = useHome();

    React.useEffect(() => {
        handleGetAllActivity();
    }, []);

    return (
        <div className={cx('relative')}>
            <ModalConfirmation
                isLoading={confirmationState?.isLoading}
                disabled={confirmationState?.isLoading}
                type={'activity'}
                isOpen={confirmationState.isShow}
                onClose={handleCancelConfirmation}
                onSubmit={()=>handleDeleteActivity(confirmationState.id)}
                title={confirmationState.title} />
            <Alert
                isOpen={isDeleteSuccess}
                onClose={handleAlertClose}
                customClass={'absolute bottom-10 right-10 z-40'}
            />
            <div
                data-cy={'activity-empty-state'}
                className={cx('px-52 py-11')}>
                <div className={cx('flex justify-between items-center mb-12')}>
                    <TextHeader title={'Activity'} dataCy={'activity-title'}/>
                    <Button
                        disabled={addActivity?.isLoading}
                        isLoading={addActivity?.isLoading}
                        onClick={handleAddActivity}
                        type={'add'}
                        dataCy={'activity-add-button'}/>
                </div>

                {home?.isLoading ?
                    <div
                        data-cy={'todo-loading-state'}
                        className={cx('flex justify-center items-center h-screen -mt-[200px]')}>
                        <Loading type={'blue'}/>
                    </div>
                    : home?.data?.length !== 0 ?  (
                        <div className={cx('flex justify-center items-center flex-wrap gap-5')}>
                            {home?.data?.map((item:ActivityRes, index:string) => (
                                <Card
                                    id={item.id}
                                    key={index}
                                    onDelete={() => handleShowConfirmation(item.id, item.title)}
                                    title={item.title}
                                    date={item.created_at}
                                    data-cy={'activity-item'}/>
                            ))}
                        </div>
                    ) : (
                        <div
                            onClick={handleAddActivity}
                            data-cy={'activity-empty-state'}
                            className={cx('flex justify-center items-center cursor-pointer')}>
                            <CImage
                                src={'/Assets/img/activity-empty-state.webp'}
                                alt={'image empty state'}
                                width={767}
                                height={490} />
                        </div>
                    )}
            </div>
        </div>
    );
};

export default HomePage;
