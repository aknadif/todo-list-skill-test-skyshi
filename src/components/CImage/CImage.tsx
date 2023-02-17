import React from 'react';
import Image from 'next/image';
import {CImageProps} from '@/types/props/CImage';

const CImage = ({
    src,
    alt,
    width,
    height,
    className = '',
}:CImageProps) => {
    return (
        <Image
            className={className}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={'lazy'}
        />
    );
};

export default CImage;
