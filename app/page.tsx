import {api} from "@/lib/api";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
    redirect('/products')
}
