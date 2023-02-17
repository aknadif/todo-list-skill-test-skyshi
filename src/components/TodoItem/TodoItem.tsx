import React from 'react';
import cx from 'classnames';
import {CImage} from '@/components';
import {TodoItemProps} from '@/types/props/TodoItem';

const TodoItem = ({
    id,
    title,
    priority,
    isActive,
    onDelete,
    onEdit,
    onCheck,
}:TodoItemProps) => {
    let bgColor = '';
    switch (priority) {
    case 'very-high':
        bgColor = 'bg-[#ED4C5C]';
        break;
    case 'high':
        bgColor = 'bg-[#F8A541]';
        break;
    case 'normal':
        bgColor = 'bg-[#00A790]';
        break;
    case 'low':
        bgColor = 'bg-[#428BC1]';
        break;
    case 'very-low':
        bgColor = 'bg-[#8942C1]';
        break;
    }
    return (
        <div className={cx('h-[80px] bg-white shadow-lg drop-shadow rounded-xl ' +
            'flex justify-between items-center p-10')}>
            <div className={cx('flex justify-center items-center gap-4')}>
                <div>
                    <input
                        defaultChecked={!isActive}
                        onClick={() => onCheck ? onCheck(id, isActive) : null}
                        className={cx('mt w-[20px] h-[20px] accent-bluePrimary border border-bluePrimary ' +
                            'hover:scale-105 cursor-pointer')}
                        data-cy={'todo-item-checkbox'}
                        type="checkbox" />
                </div>
                <span
                    data-cy={'todo-item-priority-indicator'}
                    className={cx('flex items-center w-[9px] h-[9px] rounded-full ', bgColor)} />
                <span
                    data-cy={'todo-item-title'}
                    className={cx('text-blackPrimary text-lg', {
                        'line-through text-grayPrimary': !isActive
                    })}>
                    {title}
                </span>
                <div
                    onClick={() => onEdit(id, title, priority)}
                    data-cy={'todo-item-edit-button'}
                    className={cx('hover:scale-105 cursor-pointer')}>
                    <CImage
                        src={'/Assets/Icons/IC-edit.webp'}
                        alt={'icon edit'}
                        width={20}
                        height={20} />
                </div>
            </div>
            <div
                onClick={() => onDelete(id)}
                className={cx('hover:scale-105 cursor-pointer')}
                data-cy={'todo-item-delete-button'}>
                <CImage
                    src={'/Assets/Icons/IC-trash.webp'}
                    alt={'icon trash'}
                    width={24}
                    height={24}/>
            </div>
        </div>
    );
};

export default TodoItem;
