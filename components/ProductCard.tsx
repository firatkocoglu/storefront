import {Product} from "@/types/product";
import {Card, CardContent} from "@/components/ui/card";
import {capitalizeWords, formatPrice} from "@/lib/utils";

export default async function ProductCard({ product } : {product: Product} ) {
    const image:string = product.images?.[0]?.urls?.list ??
        "/images/placeholder.png";


    return (
        <Card className="overflow-hidden">
            <a href={`/products/${product.id}`} className="block">
                <div className="aspect-square bg-muted">
                    {image && <img src={image} alt={product.name} className="h-full w-full object-cover" />}
                </div>
            </a>

        <CardContent className="p-4">
            <a href={`/products/${product.id}`} className="block">
                <div className="text-sm text-muted-foreground line-clamp-2">{capitalizeWords(product.name)}</div>
                <div className="mt-1 font-semibold">
                    {formatPrice(product.price)}
                </div>
            </a>
        </CardContent>
        </Card>
    )
}