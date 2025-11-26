import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProductsPage() {
    return (
        <section className="container mx-auto py-12">
            {/* Header */}
            <div className="mb-6 space-y-2">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-64" />
            </div>

            {/* Grid */}
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
                {Array.from({ length: 8 }).map((_, index) => (
                    <li key={index}>
                        <ProductCardSkeleton />
                    </li>
                ))}
            </ul>
        </section>
    );
}

function ProductCardSkeleton() {
    return (
        <div className="h-full flex flex-col overflow-hidden rounded-2xl border bg-background">
            {/* IMAGE */}
            <Skeleton className="aspect-square w-full" />

            {/* CONTENT */}
            <div className="p-4 flex flex-col justify-between flex-grow">
                {/* Name */}
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Price */}
                <Skeleton className="h-4 w-1/3 mt-3 self-end" />
            </div>
        </div>
    );
}