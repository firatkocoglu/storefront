import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProductDetail() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-8">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">

                {/* LEFT: Image Gallery Skeleton */}
                <section className="space-y-4">
                    <Skeleton className="w-full aspect-[4/5] rounded-xl" />

                    <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} className="aspect-[4/5] rounded-md" />
                        ))}
                    </div>
                </section>

                {/* RIGHT: Product Info Skeleton */}
                <section className="space-y-6">
                    {/* title */}
                    <Skeleton className="h-6 w-2/3 rounded" />

                    {/* price */}
                    <Skeleton className="h-5 w-32 rounded" />

                    {/* variant buttons */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-28" />
                        <div className="flex gap-2 flex-wrap">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton key={i} className="h-8 w-20 rounded-full" />
                            ))}
                        </div>
                    </div>

                    {/* Add to cart */}
                    <Skeleton className="h-10 w-full rounded-full" />

                    {/* description */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                </section>
            </div>
        </main>
    );
}