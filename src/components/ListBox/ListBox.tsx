import cx from 'classnames';
import React, {Fragment} from 'react';
import {Listbox, Transition} from '@headlessui/react';

import {CImage} from '@/components';


const ListBox = ({
    selected,
    prioritys,
    setSelected,
}: any) => {

    return (
        <div className={cx('w-72')}>
            <span
                data-cy={'modal-add-priority-title'}
                className={cx('text-xs font-semibold ' +
                'text-blackPrimary uppercase')}>
                Priority
            </span>
            <Listbox value={selected} onChange={setSelected}>
                <div className={cx('mt-1')}>
                    <Listbox.Button>
                        <div
                            data-cy={'modal-add-priority-button'}
                            className={cx('relative w-[205px] h-[52px] border border-whitePrimary ' +
                            'cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left ' +
                            'active:bg-whitePrimary sm:text-sm')}>
                            <span className={cx('absolute top-4 left-3 flex ' +
                             'items-center pl-3 w-[14px] h-[14px] rounded-full' +
                             '', selected.color)} />
                            <span className={cx('pl-7 block truncate')}>{selected.name}</span>
                            <span className={cx('pointer-events-none absolute inset-y-0 ' +
                                'right-4 flex items-center pr-2')}>
                                <CImage
                                    src={'/Assets/Icons/IC-up.webp'}
                                    alt={'icon up'}
                                    width={12}
                                    height={6} />
                            </span>
                        </div>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className={cx('absolute z-20 mt-1 w-[205px] rounded-md ' +
                            'bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 ' +
                            'focus:outline-none sm:text-sm')}>
                            {prioritys.map((priority:{
                                name:string,
                                color:string
                            }, priorityIdx:number) => (
                                <Listbox.Option
                                    key={priorityIdx}
                                    className={cx('relative cursor-pointer select-none py-3.5 border-b ' +
                                        'border-whitePrimary pl-10 pr-4')}
                                    value={priority}
                                >
                                    {({selected}) => (
                                        <>
                                            <span className={cx('absolute top-4 left-3 flex ' +
                                                'items-center pl-3 w-[14px] h-[14px] rounded-full ' +
                                                'hover:bg-whitePrimary ', priority.color)} />
                                            <span
                                                className={`block truncate ${
                                                    selected ? 'font-semibold' : 'font-normal'
                                                }`}
                                            >
                                                {priority.name}
                                            </span>
                                            {selected ? (
                                                // eslint-disable-next-line max-len
                                                <span className="absolute inset-y-0 right-2 flex items-center pr-3 text-blackPrimary">
                                                    <CImage
                                                        src={'/Assets/Icons/IC-check.webp'}
                                                        alt={'icon check'}
                                                        width={11}
                                                        height={8} />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default ListBox;
