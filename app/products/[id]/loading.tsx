// app/products/[id]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProductDetail() {
    return (
        <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: image gallery skeleton */}
            <div className="overflow-hidden space-y-4">
                <Skeleton className="w-full aspect-[4/5] rounded-xl" />
                <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="aspect-[4/5] rounded-md" />
                    ))}
                </div>
            </div>

            {/* Right: details skeleton */}
            <div className="product-details flex flex-col gap-6">
                {/* price + title */}
                <div className="details-header flex flex-col gap-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-5 w-2/3" />
                </div>

                {/* description */}
                <div className="details-description space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                {/* shipment / return cards */}
                <div className="details-shipment flex flex-col gap-2">
                    <div className="flex items-center gap-3 rounded-md border border-gray-300 p-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-40" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-md border border-gray-300 p-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-40" />
                        </div>
                    </div>
                </div>

                {/* add to cart + badges */}
                <div className="add-to-cart flex gap-4 items-center">
                    <Skeleton className="h-12 w-1/2 rounded-md" />
                    <Skeleton className="h-8 w-28 rounded-full" />
                </div>
            </div>
        </section>
    );
}