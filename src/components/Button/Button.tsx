import React from 'react';
import cx from 'classnames';

import CImage from '@/components/CImage/CImage';
import {ButtonProps} from '@/types/props/Button';
import {Loading} from '@/components';

const Button = ({
    onClick = () => {},
    type,
    disabled = false,
    isLoading = false,
    dataCy = '',
}: ButtonProps) => {
    let
        text,
        bgColor,
        textColor = 'text-whitePrimary',
        icon = false;
    switch (type) {
    case 'add':
        text = 'Tambah';
        bgColor = 'bg-bluePrimary';
        icon = true;
        break;
    case 'save':
        text = 'Simpan';
        bgColor = 'bg-bluePrimary';
        break;
    case 'cancel':
        text = 'Batal';
        bgColor = 'bg-graySecondary';
        textColor = 'text-blackPrimary';
        break;
    case 'delete':
        text = 'Hapus';
        bgColor = 'bg-redPrimary';
        break;
    }
    return (
        <button
            data-cy={dataCy}
            onClick={onClick}
            disabled={disabled}
            className={cx(bgColor, textColor, 'w-[150px] h-[54px] rounded-full opacity-100 hover:opacity-90 ' +
                'flex justify-center items-center gap-2 ', {'hover:opacity-100': disabled})}>
            {isLoading && <Loading />}
            {icon && !isLoading &&
            <CImage
                src={'/Assets/Icons/IC-plus.webp'}
                alt={'icon plus'}
                width={24}
                height={24}
            />}
            <span className={cx('font-semibold text-lg')}>{text}</span>
        </button>
    );
};

export default Button;
