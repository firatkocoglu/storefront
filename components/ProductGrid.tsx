import ProductCard from "./ProductCard";

export const revalidate = 0; // revalidate this page every 120 seconds

export default async function ProductGrid({ products = []}: { products: Array<object> }) {

    return (
        <section className="container mx-auto py-12">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold">Products</h1>
                <p className="text-sm text-muted-foreground">Hand-picked items for you</p>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
                {products.map(product => (
                    <li key={product.id}><ProductCard product={product} /></li>
                ))}
            </ul>

            <div>
            </div>
        </section>
    )
}