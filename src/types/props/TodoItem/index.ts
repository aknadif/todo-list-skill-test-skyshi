export interface TodoItemProps {
    id: number
    title: string
    priority: 'very-high' | 'high' | 'normal' | 'low' | 'very-low'
    isActive: boolean
    onDelete: (id: number) => void
    onEdit: (id: number, title:string, priority: 'very-high' | 'high' | 'normal' | 'low' | 'very-low') => void
    onCheck?: (id: number, isActive: boolean) => void
}
