import React from 'react';
import cx from 'classnames';
import {CImage} from '@/components';
import {CardProps} from '@/types/props/Card';
import formatDate from '@/utils/formatDate';
import Link from 'next/link';

const Card = ({
    id,
    date,
    title,
    onDelete,
}:CardProps) => {
    return (
        <div
            className={cx('relative  rounded-xl shadow-lg drop-shadow p-6 ' +
                'cursor-pointer hover:scale-105 transition')}>
            <Link
                href={{
                    pathname: `/home/detail/${id}`,
                    query: {id, title}}}>
                <div
                    data-cy={'activity-item'}
                    className={cx('w-[235px] h-[234px]')}>
                    <span className={cx('text-blackPrimary font-bold text-lg')}
                        data-cy={'activity-title'}>
                        {title}
                    </span>
                </div>
            </Link>

            <div className={cx('flex justify-between items-center w-5/6 text-grayPrimary ' +
                'absolute bottom-4 z-20')}>
                <span className={cx('font-medium text-sm')}
                    data-cy={'activity-item-title'}>{formatDate(date!)}</span>
                <div
                    onClick={onDelete}
                    className={cx('cursor-pointer hover:scale-105')}
                    data-cy={'activity-item-delete-button'}>
                    <CImage
                        src={'/Assets/Icons/IC-trash.webp'}
                        alt={'icon trash'}
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
