export type Product = {
    id: number;
    name: string;
    slug: string;
    price: string;
    status: string;
    images?: Image[];
    description?: string;
}

export type Image = {
    urls: {
        thumb: string;
        list: string;
    }
}

