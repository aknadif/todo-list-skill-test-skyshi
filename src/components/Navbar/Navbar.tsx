import React from 'react';
import cx from 'classnames';

const Navbar = () => {
    return (
        <div
            className={cx('h-[105px] bg-bluePrimary px-52 py-8')}
            data-cy={'activity-header-background'}>
            <span className={cx('text-whitePrimary uppercase font-bold text-2xl')}
                data-cy={'header-title'}>
                TO DO LIST APP
            </span>
        </div>
    );
};

export default Navbar;
