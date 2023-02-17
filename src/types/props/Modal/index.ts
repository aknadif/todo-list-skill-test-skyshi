export interface ModalProps {
    type: 'add' | 'edit';
    isOpen: boolean;
    onClose: () => void;
    value?: string;
    onSave: (
        title?: string,
        priority?: 'very-high' | 'high' | 'normal' | 'low' | 'very-low',
    ) => void;
    isLoading?: boolean;
    priority?: 'very-high' | 'high' | 'normal' | 'low' | 'very-low',
}
