import React, {Fragment} from 'react';
import cx from 'classnames';
import {Listbox, Transition} from '@headlessui/react';
import {CImage} from '@/components';

const DropdownSort = ({
    selected,
    sorts,
    setSelected,
}: any) => {
    return (
        <div className={cx('')}>
            <Listbox value={selected} onChange={setSelected}>
                <div className={cx('mt-1')}>
                    <Listbox.Button
                        data-cy={'todo-sort-button'}
                        className={cx('relative' +
                            'hover:scale-105 cursor-pointer z-30')}>
                        <span>
                            <CImage
                                src={'/Assets/Icons/IC-sort.webp'}
                                alt={'Icon sort'}
                                width={54}
                                height={54}
                            />
                        </span>
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
                            {sorts.map((sort:{
                                name:string,
                                src:string
                            }, sortIdx:number) => (
                                <Listbox.Option
                                    data-cy={'sort-selection'}
                                    key={sortIdx}
                                    className={cx('relative cursor-pointer select-none py-3.5 border-b ' +
                                        'border-whitePrimary pl-10 pr-4 hover:bg-whitePrimary')}
                                    value={sort}
                                >
                                    {({selected}) => (
                                        <>
                                            <span className={cx('absolute top-2 left-0 flex ' +
                                                'items-center pl-2 w-[35px] h-[35px]' +
                                                '')}>
                                                <CImage
                                                    src={sort.src}
                                                    alt={'icon sort'}
                                                    width={35}
                                                    height={35} />
                                            </span>
                                            <span
                                                className={`block truncate ${
                                                    selected ? 'font-semibold' : 'font-normal'
                                                }`}
                                            >
                                                {sort.name}
                                            </span>

                                            {selected ? (
                                                // eslint-disable-next-line max-len
                                                <span className="absolute inset-y-0 right-2 flex items-center pr-3 text-blackPrimary h-[40px] w-[40px]">
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

export default DropdownSort;
