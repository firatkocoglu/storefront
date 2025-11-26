import ProductDetail from "@/components/Products/Detail/ProductDetail";
import { get } from "@/lib/api";
import { Product, ProductResponse } from "@/types/product";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const product = await get<ProductResponse>(`/products/${id}`)
    const data: Product = product.data;

    return (
        <ProductDetail product={data} />
    )
}