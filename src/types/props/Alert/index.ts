export interface AlertProps {
    isOpen: boolean;
    onClose: () => void;
    customClass?: string;
    type?: 'activity' | 'todo'
}
