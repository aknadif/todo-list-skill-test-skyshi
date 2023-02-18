import React, {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import cx from 'classnames';
import {Button, CImage} from '@/components';
import {ModalConfirmationProps} from '@/types/props/ModalConfirmation';

const ModalConfirmation = ({
    isOpen,
    onClose,
    type,
    title,
    onSubmit,
    isLoading,
    disabled
}:ModalConfirmationProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={cx('relative z-10')} data-cy={'activity-item-delete-button'} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={cx('fixed inset-0 bg-blackPrimary bg-opacity-25')} />
                </Transition.Child>

                <div
                    className={cx('fixed inset-0 overflow-y-auto')}>
                    <div className={cx('flex min-h-full items-center justify-center p-4 text-center')}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={cx('w-[490px] h-[355px] transform ' +
                                'rounded-2xl bg-white text-left align-middle shadow-xl transition-all')}>
                                <div
                                    data-cy={'modal-delete'}
                                    className={cx('flex justify-center items-center gap-4 ' +
                                    'flex-col p-14')}>
                                    <div>
                                        <CImage
                                            src={'/Assets/Icons/IC-warning.webp'}
                                            alt={'icon alert'}
                                            width={63}
                                            height={57}/>
                                    </div>
                                    <div className={cx('text-center')}>
                                        <p className={cx('text-lg text-blackPrimary')}>
                                            Apakah anda yakin ingin
                                            menghapus {type === 'list' ? 'List Item ': 'activity '}
                                            <span className={cx('mt-2 font-bold text-lg')}>
                                                &quot;{title}&quot;?
                                            </span>
                                        </p>
                                    </div>
                                    <div className={cx('mt-4 flex justify-between items-center gap-6')}>
                                        <Button
                                            onClick={onClose}
                                            dataCy={'modal-delete-cancel-button'}
                                            type={'cancel'}/>
                                        <Button
                                            isLoading={isLoading}
                                            disabled={disabled}
                                            onClick={onSubmit}
                                            dataCy={'modal-delete-confirm-button'}
                                            type={'delete'}/>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ModalConfirmation;
