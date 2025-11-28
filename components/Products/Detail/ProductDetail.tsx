import { Product } from "@/types/product"
import ProductImages from "@/components/Products/Detail/ProductImages";
import { capitalizeWords } from "@/lib/utils";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { ProductDetailActions } from "@/components/Products/Detail/ProductDetailActions";
import { TruckElectric, Undo2 } from "lucide-react";

export default async function ProductDetail  ({product} : {product: Product}) {
    const { name, description, price, stock } = product;
    const images = product.images ?? [];
    const capitalizedName = capitalizeWords(name);

    return (
        <section className="container mx-auto py-12 grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="overflow-hidden">
                <ProductImages images={images} />
            </div>
            <div className="product-details flex flex-col gap-6">
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
                <ProductDetailActions productId={product.id} stock={stock}/>
            </div>
        </section>
    )
}