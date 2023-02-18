import React from 'react';
import {Dialog} from '@headlessui/react';
import {CImage} from '@/components';
import cx from 'classnames';
import {AlertProps} from '@/types/props/Alert';

const Alert = ({
    isOpen,
    onClose,
    customClass,
    type = 'activity',
}:AlertProps) => {
    React.useEffect(() => {
        if (isOpen){
            setTimeout(() => {
                onClose();
            }, 2000);
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <Dialog.Panel>
                <div
                    data-cy={'modal-information'}
                    className={cx('flex items-center gap-3 w-[490px] p-4 rounded-md shadow-lg drop-shadow ',
                        customClass)}
                >
                    <CImage
                        src={'/Assets/Icons/IC-alert.webp'}
                        alt={'icon alert'}
                        width={24}
                        height={24}/>
                    <span>
                        {type === 'activity' ? 'Activity' : 'To do'} berhasil dihapus
                    </span>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default Alert;
