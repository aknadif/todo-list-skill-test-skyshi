export interface CardProps {
    title?: string;
    date?: string;
    id?: number;

    onDelete?: () => void;
}
