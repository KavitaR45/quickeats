"use client"
import { useCart } from '@/context/cartContext';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    const { cartItems } = useCart();

    // Calculate the total quantity of items in the cart
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="flex justify-between items-center p-4 sticky top-0 z-50 bg-white shadow-md">
            <h1 className="text-2xl font-bold"><Link href="/">QE.</Link></h1>
            <div className="relative">
                <Link href='/cart'>
                <ShoppingCart className="h-6 w-6" />
                {totalQuantity > 0 && (
                    <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        {totalQuantity}
                    </span>
                )}
                </Link>
            </div>
        </header>
    );
}
