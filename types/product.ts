export type Product = {
    id: number;
    name: string;
    slug: string;
    price: string;
    status: string;
    images?: Image[];
    variants?: Variant[];
    description?: string;
    stock: {
        quantity: number;
    }
}

export type Image = {
    id: number;
    alt_text: string;
    is_primary: boolean;
    mime: string;
    public_id: string;
    size_bytes: number;
    sort_order: number;
    width: number;
    height: number;
    urls: {
        thumb: string;
        list: string;
    }
}

export type Variant = { id: number;
    product_id: number;
    price: string;
    sku: string;
}

export type ProductResponse = {
    data: Product;
}