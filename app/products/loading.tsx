import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingGrid() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-8">
            <div className="mb-8 space-y-2">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-64" />
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <SkeletonProductCard key={i} />
                ))}
            </div>
        </main>
    );
}

function SkeletonProductCard() {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border h-full">
            <Skeleton className="aspect-[4/5] w-full" />

            <div className="p-3 flex flex-col flex-1 justify-between">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4 mb-3" />
                </div>

                <Skeleton className="h-4 w-1/3" />
            </div>
        </div>
    );
}