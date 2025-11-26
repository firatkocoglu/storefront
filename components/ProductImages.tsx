import { Image } from "@/types/product";

export default function ProductImages({images}: { images: Array<Image> }) {
    if (images.length === 0) return null;
    const primaryImage = images[0];

    return (
        <div className="product-images flex flex-col gap-4">
            <div className="w-full mx-auto aspect-square overflow-hidden rounded-md">
                <img key={ `primaryImage:id:${primaryImage.id}` } src={ primaryImage.urls.detail } alt={ primaryImage.alt_text } className="h-full w-full object-cover"/>
            </div>
            <div className="flex flex-row justify-between gap-2 flex-wrap">
                {
                    images.map((image: Image) => (
                        <img key={ `productImage:id:${image.id}`} src={ image.urls.thumb } alt={ image.alt_text }  className="rounded-md"/>
                    ))
                }
            </div>
        </div>
    );
}
