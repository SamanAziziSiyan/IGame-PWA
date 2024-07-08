export interface IconProps { color?: string, className?: string, size?: number }

interface Product {
    title: string;
    description: string;
    parentId: number;
    url: string;
    hasChildren: boolean;
    hasProducts: boolean;
    id: number;
    createDateTime: Date;
    updateDateTime: Date;
}

export interface HomeProps {
    data: {
        status: string;
        errors: any[];
        joinedErrors: string;
        data: Product[];
    };
}