"use client"

import * as React from "react"
import { BookOpenCheck, ChevronsUpDown, Hotel, Plus, } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export function NavMenu() {
    const router = useRouter()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} size={'icon'} className={cn('hover:opacity-70')}>
                    <ChevronsUpDown
                        className=""
                    />
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2" onClick={() => router.push("/hotel/new")}>
                    <Plus size={15} /> <span>  Add Hotel</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2" onClick={() => router.push("/hotel/new")}>
                    <Hotel size={15} /> <span>  Add Hotel</span>

                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2" onClick={() => router.push("/hotel/new")}>
                    <BookOpenCheck size={15} />  <span> My Booking</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
