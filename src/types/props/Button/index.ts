export interface ButtonProps {
    onClick?: () => void;
    type: 'add' | 'save' | 'cancel' | 'delete';
    disabled?: boolean;
    isLoading?: boolean;
}
