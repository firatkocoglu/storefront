import {get} from "@/lib/api";
import {Product} from "@/types/product";

import ProductCard from "./ProductCard";

export const revalidate = 120; // revalidate this page every 60 seconds

export default async function ProductGrid({ cursor = "", perPage = 15,}: { cursor?: string; perPage?: number }) {

    // Disable data cache for cursor-based pagination to avoid stale lists
    const res = await get<CursorPage<Product>>(`/products`, { revalidate });

    return (
        <section className="container mx-auto py-12">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold">Products</h1>
                <p className="text-sm text-muted-foreground">Hand-picked items for you</p>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {res.data.map(p => (
                    <li key={p.id}><ProductCard product={p} /></li>
                ))}
            </ul>
        </section>
    )
}