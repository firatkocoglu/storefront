import {api} from "@/lib/api";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/ProductGrid";

export default function Home({searchParams} : {searchParams: {cursor? : string; perPage?: string}}) {
    const cursor = searchParams.cursor ?? "";
    const perPage = searchParams.perPage ? parseInt(searchParams.perPage) : 10;

  return (
    <div>
        <main className="mx-auto max-w-7xl px-4 py-8">
            <ProductGrid cursor={cursor} perPage={10}/>
        </main>
    </div>
  );
}
