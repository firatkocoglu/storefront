import { Image } from "@/types/product";

export default function ProductImages({images}: { images: Array<Image> }) {
    if (images.length === 0) return null;
    const primaryImage = images[0];

    return (
        <div className="product-images flex flex-col gap-4">
            <div className="flex">
                <img key={ `primaryImage:id:${primaryImage.id}` } src={ primaryImage.urls.detail } alt={ primaryImage.alt_text } className="rounded-md"/>
            </div>
            <div className="flex gap-4">
                {
                    images.map((image: Image) => (
                        <img key={ `productImage:id:${image.id}`} src={ image.urls.thumb } alt={ image.alt_text } width={image.width / 8}  className="rounded-md"/>
                    ))
                }
            </div>
        </div>
    );
}
