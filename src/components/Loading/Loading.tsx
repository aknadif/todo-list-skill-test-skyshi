import React from 'react';
import cx from 'classnames';
import {CImage} from '@/components';

interface LoadingProps {
    type?: 'white' | 'blue';
}
const Loading = ({
    type = 'white'
}:LoadingProps
)=> {
    let h, w, hw:string, src:string;
    switch (type) {
    case 'white':
        h = 6;
        w = 6;
        hw = 'h-6 w-6';
        src = '/Assets/Icons/IC-loading.webp';
        break;
    case 'blue':
        h = 20;
        w = 20;
        hw = 'h-20 w-20';
        src = '/Assets/Icons/IC-loading-blue.webp';
        break;
    }
    return (
        <div className={cx('flex justify-center items-center')}>
            <CImage
                className={cx('animate-spin', hw!)}
                src={src!}
                alt={'loading'}
                width={w}
                height={h}/>
        </div>
    );
};

export default Loading;
