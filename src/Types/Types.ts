export interface IProduct {
    title: string;
    price: number;
    _id: string;
    description: string;
    images: string[] | [];
    attributes ?: [] | 
        {
            name : string,
            value : string | number
        }[]
    ;
    category : string;
    isFeatured?: boolean;
}
export interface ICartItem {
    title: string;
    _id: string;
    price: number;
    img : string;
    qty : number;
    onChange ?: () => void;
    category ?: string;
    remove: (id:string) => void;
    shortdesc ?: string;
    selectedColor ?: string;
}

export interface IProductCard {
    _id: string,
    title: string,
    price: number,
    images: string[],
    img ?: string,
    category: string,
    width?: string | number
    height?: string | number;
    whishedItem ?:boolean,
    onRemove?: (_id: string) => void
}