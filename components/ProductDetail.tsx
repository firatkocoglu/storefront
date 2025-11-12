import { Product } from "@/types/product"
import ProductImages from "@/components/ProductImages";
import { capitalizeWords } from "@/lib/utils";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, TruckElectric, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProductDetail  ({product} : {product: Product}) {
    const { name, description, price, stock } = product;
    const images = product.images ?? [];
    const capitalizedName = capitalizeWords(name);

    return (
        <section className="container mx-auto py-12 grid grid-cols-2 md:grid-cols-2 gap-6">
            <div>
                <ProductImages images={images} />
            </div>
            <div className="product-details flex flex-col gap-4">
                <div className="details-header flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold">{price}₺</h1>
                <h1 className="text-xl font-semibold">{capitalizedName}</h1>

                </div>
                <div className="details-description">
                    <p>{description}</p>
                </div>
                <div className="details-shipment flex flex-col gap-2">
                    <Item variant="outline" className="border-gray-300">
                        <div className="shipment-logo">
                            <TruckElectric size="48"/>
                        </div>
                        <ItemContent>

                            <ItemTitle className="text-lg font-semibold"
                            >
                                Free Shipment
                            </ItemTitle>
                            <ItemDescription>
                                On orders over 500₺
                            </ItemDescription>
                        </ItemContent>
                    </Item>
                    <Item variant="outline" className="border-gray-300">
                        <div className="shipment-logo">
                            <Undo2 size={48}/>
                        </div>
                        <ItemContent>

                            <ItemTitle className="text-lg font-semibold"
                            >
                                Return Delivery
                            </ItemTitle>
                            <ItemDescription>
                                30 days return policy
                            </ItemDescription>
                        </ItemContent>
                    </Item>
                </div>
                <div className="add-to-cart flex gap-4">
                    <Button variant="outline" className="bg-black text-white w-1/2 py-6"><ShoppingCart /> Add to Cart</Button>
                    {(stock && stock.quantity > 10) ? <Badge variant="secondary" className="bg-green-500 text-white dark:bg-green-600">In Stock</Badge> :
                        <div className="flex gap-2">
                        <Badge variant="destructive" className="bg-red-500 text-white dark:bg-red-600">Critical Stock</Badge>
                        <Badge variant="outline" className="bg-blue-500 text-white dark:bg-blue-600">Last {stock?.quantity} products</Badge>
                    </div>}
                </div>
            </div>
        </section>
    )
}