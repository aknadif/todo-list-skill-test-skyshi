import cx from 'classnames';
import React, {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';


import {ModalProps} from '@/types/props/Modal';
import {Button, CImage, ListBox} from '@/components';

const Modal = ({
    type,
    value,
    isOpen,
    onClose,
    onSave,
    priority,
    isLoading,
}:ModalProps) => {
    const prioritys:{
        name: string;
        color: string;
        value: 'very-high' | 'high' | 'normal' | 'low' | 'very-low'
    }[] = [
        {name: 'Very High', color: 'bg-[#ED4C5C]', value: 'very-high'},
        {name: 'High', color: 'bg-[#F8A541]', value: 'high'},
        {name: 'Medium', color: 'bg-[#00A790]', value: 'normal'},
        {name: 'Low', color: 'bg-[#428BC1]', value: 'low'},
        {name: 'Very Low', color: 'bg-[#8942C1]', value: 'very-low'},
    ];
    const [selected, setSelected] = useState(prioritys[0]);
    const [data, setData] = React.useState({
        title: value,
        priority: priority,
    });
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            title: e.target.value,
            priority: selected.value
        });
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={cx('relative z-10')} onClose={onClose}>
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
                            <Dialog.Panel className={cx('w-[830px] h-[403px] transform ' +
                                'rounded-2xl bg-white text-left align-middle shadow-xl transition-all')}>
                                <div data-cy={'modal-add'}>
                                    <div
                                        className={cx('flex justify-between items-center p-6 ')}>
                                        <span
                                            data-cy={'modal-add-title'}
                                            className={cx('text-blackPrimary font-semibold text-lg')}>
                                            {type === 'add' ? 'Tambah List Item' : 'Edit List Item'}
                                        </span>
                                        <div
                                            className={cx('cursor-pointer hover:scale-105')}
                                            data-cy={'modal-add-close-button'}
                                            onClick={onClose}>
                                            <CImage
                                                src={'/Assets/Icons/IC-x.webp'}
                                                alt={'Icon X'}
                                                width={24}
                                                height={24}/>
                                        </div>
                                    </div>

                                    <div className={cx('relative flex items-center')}>
                                        <div className={cx('flex-grow border-t border-whitePrimary')}></div>
                                    </div>

                                    <div className={cx('px-6 pt-8 pb-6')}>
                                        <div className={cx('mb-6')}>
                                            <label
                                                data-cy={'modal-add-name-title'}
                                                htmlFor="name"
                                                className={cx('text-xs font-semibold ' +
                                                    'text-blackPrimary uppercase')}>
                                                Nama List Item
                                            </label>
                                            <input
                                                data-cy={'modal-add-name-input'}
                                                type="text"
                                                id="name"
                                                defaultValue={value}
                                                onChange={handleChange}
                                                className={cx('mt-2 h-[52px] caret-bluePrimary bg-white outline-none ' +
                                                    'border border-whitePrimary text-blackPrimary text-sm ' +
                                                    'rounded-lg block w-full p-2.5 focus:border-bluePrimary ')}
                                                placeholder="Tambahkan nama activity" required />
                                        </div>
                                        <div>
                                            <ListBox
                                                setSelected={setSelected}
                                                prioritys={prioritys}
                                                selected={selected}
                                            />
                                        </div>

                                    </div>

                                    <div className={cx('relative flex items-center')}>
                                        <div className={cx('flex-grow border-t border-whitePrimary')}></div>
                                    </div>

                                    <div className={cx('mt-4 flex justify-end items-center px-6 opacity-90')}>
                                        <Button
                                            onClick={()=>{
                                                // @ts-ignore
                                                onSave(data.title === '' ? value :data.title, selected.value);
                                                setData(
                                                    {
                                                        title: '',
                                                        priority: 'very-high'});
                                            }}
                                            dataCy={'modal-add-save-button'}
                                            type={'save'}
                                            isLoading={isLoading}
                                            disabled={ data.title === undefined || data.title === ''}/>
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

export default Modal;
