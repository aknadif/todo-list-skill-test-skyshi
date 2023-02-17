export interface ModalConfirmationProps {
    type: 'activity' | 'list'
    isOpen: boolean
    onClose: () => void
    onSubmit: () => void
    title: string
    isLoading: boolean
    disabled: boolean
}
