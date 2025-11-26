import ProductGrid from "@/components/Products/ProductGrid";
import { get } from "@/lib/api";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";

export default async function Products({ searchParams }: {  searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const queries = await searchParams;
    const cursor = queries?.cursor ?? '';
    const page = queries?.page ?? '10';

    const products = await get(`/products${cursor ? `?cursor=${cursor}` : ''}`)
    const { data, meta } = products;

    const prevCursor =  `/products?cursor=${meta.prev_cursor}`;
    const nextCursor = `/products?cursor=${meta.next_cursor}`;

    return (
        <>
        <div>
            <ProductGrid products={data} />
        </div>

        <div className="flex justify-center align-middle mb-10">
         <Pagination>
            <PaginationContent>

            <PaginationItem style={!meta.prev_cursor ? {height: '0px', width: '0px', overflow:'hidden'} : {}}>
                <PaginationPrevious href={prevCursor} ></PaginationPrevious>
            </PaginationItem>

                    <PaginationItem style={!meta.next_cursor ? {height: '0px', width: '0px', overflow:'hidden'} : {}}>
                        <PaginationNext href={nextCursor}></PaginationNext>
                    </PaginationItem>

            </PaginationContent>
         </Pagination>
        </div>
        </>
    )
}