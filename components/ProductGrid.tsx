import {api} from "@/lib/api";
import {Product} from "@/types/product";
import ProductCard from "./ProductCard";

export default async function ProductGrid() {
    const { data: products, nextPage, prevPage } = await api('/products');

    return (
        <></>
    )
}