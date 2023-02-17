export interface GetDetailResponse {
    id: number;
    title: string;
    activity_group_id: number;
    is_active: boolean;
    priority: 'very-high' | 'high' | 'normal' | 'low' | 'very-low'
}
