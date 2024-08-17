"use client"
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/cartContext';
import Image from 'next/image';
import { Button } from "@/components/ui/button"; // Assuming you have this component
import { X } from 'lucide-react';
export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleRemoveFromCart = (id: number) => {
        removeFromCart(id);
    };

    const handleIncrement = (id: number) => {
        updateQuantity(id, 1);
    };

    const handleDecrement = (id: number) => {
        updateQuantity(id, -1);
    };

    return (
        <main className="p-6">
            {cartItems.length > 0 ? (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="w-full bg-gray-100 border-b">
                                    <th className="py-3 px-4 text-left">Image</th>
                                    <th className="py-3 px-4 text-left">Name</th>
                                    <th className="py-3 px-4 text-left">Price</th>
                                    <th className="py-3 px-4 text-left">Quantity</th>
                                    <th className="py-3 px-4 text-left">Total</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id} className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-4">
                                            <div className="relative w-20 h-20">
                                                <Image
                                                    alt={item.Name}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    src={item.FeaturedImage}
                                                    className="rounded"
                                                />
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm">{item.Name}</td>
                                        <td className="py-3 px-4 text-sm">₹{item.Price[0].Rupee}</td>
                                        <td className="py-3 px-4 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="outline"
                                                    onClick={() => handleDecrement(item.id)}
                                                    disabled={item.quantity <= 1}
                                                    className="h-8 w-8 flex items-center justify-center"
                                                >
                                                    -
                                                </Button>
                                                <span>{item.quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => handleIncrement(item.id)}
                                                    className="h-8 w-8 flex items-center justify-center"
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm">₹{item.Price[0].Rupee * item.quantity}</td>
                                        <td className="py-3 px-4">
                                            <X onClick={() => handleRemoveFromCart(item.id)} className="cursor-pointer h-6 w-6" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen">
                    <p className="text-lg font-semibold mb-2">Your cart is empty</p>
                    <Button asChild>
                        <Link href="/">Browse Products</Link>
                    </Button>
                </div>
            )}
        </main>
    );
}
