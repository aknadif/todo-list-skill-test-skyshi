import React from 'react';
import cx from 'classnames';

import {TextHeaderProps} from '@/types/props/TextHeader';

const TextHeader = ({
    title,
    onClick = () => {},
}: TextHeaderProps) => {
    return (
        <span
            onClick={onClick}
            className={cx('font-bold text-4xl text-blackPrimary')}>
            {title}
        </span>
    );
};

export default TextHeader;
