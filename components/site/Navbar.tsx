// components/site/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Search, Menu, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
    const [q, setQ] = useState("");

    return (
        <header className="top-0 z-40 w-full border-b bg-background">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4">
                {/* Left: Logo + Mobile menu */}
                <div className="flex items-center gap-2">
                    {/* Mobile menu */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-72">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="mt-4 grid gap-2 text-sm">
                                <Link href="/" className="rounded px-2 py-1 hover:bg-muted">Home</Link>
                                <Link href="/search" className="rounded px-2 py-1 hover:bg-muted">Search</Link>
                                <Separator className="my-2" />
                                <Link href="/account/orders" className="rounded px-2 py-1 hover:bg-muted">Orders</Link>
                                <Link href="/account/returns" className="rounded px-2 py-1 hover:bg-muted">Returns</Link>
                                <Link href="/account/addresses" className="rounded px-2 py-1 hover:bg-muted">Addresses</Link>
                                <Link href="/account/profile" className="rounded px-2 py-1 hover:bg-muted">Profile</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <Link href="/" className="font-semibold tracking-tight">
                        Acme Store
                    </Link>
                </div>

                {/* Center: Search (desktop) */}
                <form
                    action="/search"
                    className="hidden min-w-0 flex-1 md:block"
                    onSubmit={(e) => {
                        if (!q.trim()) e.preventDefault();
                    }}
                >
                    <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            name="q"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search products…"
                            className="pl-9"
                            autoComplete="off"
                        />
                    </div>
                </form>

                {/* Right: Cart + Profile */}
                <div className="flex items-center gap-1">
                    {/* Mobile search icon */}
                    <Button asChild variant="ghost" size="icon" className="md:hidden" aria-label="Search">
                        <Link href="/search">
                            <Search className="h-5 w-5" />
                        </Link>
                    </Button>

                    {/* (Optional) Cart badge sonra eklenir */}
                    <Button asChild variant="ghost" size="icon" aria-label="Cart">
                        <Link href="/cart">
                            <ShoppingCart className="h-5 w-5" />
                        </Link>
                    </Button>

                    {/* Profile dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Account">
                                <Avatar className="h-7 w-7">
                                    <AvatarFallback>
                                        <User className="h-4 w-4" />
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/account/orders" className="w-full">Orders</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/account/returns" className="w-full">Returns</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/account/addresses" className="w-full">Addresses</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/account/profile" className="w-full">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/logout" className="w-full">Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}