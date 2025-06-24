import React from 'react'
import ModeToggle from './mode-toggle'
import { Button } from '@/components/ui/button'
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const Menu = () => {
    return (
        <div className='flex justify-end gap-3'>
            <nav className="hidden md:flex w-full max-w xs gap-1">
                <div className="space-x-2 flex items-center">
                    <ModeToggle />
                    <Button asChild variant="ghost">
                        <Link href="/cart">
                            <ShoppingCart /> Cart
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/sign-in">
                            <UserIcon /> Sign In
                        </Link>
                    </Button>
                </div>
            </nav>

            <nav className='md:hidden'>
                <Sheet>
                    <SheetTrigger className='align-middle'>
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className=' pt-3 px-6'>
                        <SheetTitle>Menu</SheetTitle>
                        <div className="space-x-2 flex flex-col items-start">
                            <ModeToggle />
                            <Button asChild variant="ghost">
                                <Link href="/cart">
                                    <ShoppingCart /> Cart
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="/sign-in">
                                    <UserIcon /> Sign In
                                </Link>
                            </Button>
                        </div>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}

export default Menu