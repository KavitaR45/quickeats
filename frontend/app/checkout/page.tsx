"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button'; // Adjust import paths as necessary
import { Card, CardContent } from '@/components/ui/card'; // Adjust import paths as necessary
import { Input } from '@/components/ui/input'; // Adjust import paths as necessary
import { Label } from '@/components/ui/label'; // Adjust import paths as necessary
import { toast } from 'sonner';
import { useCart } from '@/context/cartContext'; // Adjust import paths as necessary
import Link from 'next/link';

// Zod schema for form validation
const schema = z.object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email address'),
    address: z.string().nonempty('Address is required'),
    city: z.string().nonempty('City is required'),
    postalCode: z.string().nonempty('Postal code is required'),
    country: z.string().nonempty('Country is required'),
    paymentMethod: z.string().nonempty('Payment method is required'),
});

type FormValues = z.infer<typeof schema>;

export default function CheckoutPage() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            address: '',
            city: '',
            postalCode: '',
            country: '',
            paymentMethod: '',
        },
    });

    const { cartItems } = useCart(); // Fetch cart items from the context
    console.log("CART ITEMS",cartItems)

    const onSubmit = (data: FormValues) => {
        // Handle form submission
        toast.success('Order placed successfully');
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.Price[0].Rupee * item.quantity, 0);

    return (
        <main className="p-6 lg:p-12">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Billing Form */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <Label htmlFor="name">Name</Label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => <Input id="name" placeholder="Full Name" {...field} />}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <Input id="email" placeholder="Email Address" type="email" {...field} />}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="address">Address</Label>
                            <Controller
                                name="address"
                                control={control}
                                render={({ field }) => <Input id="address" placeholder="Address" {...field} />}
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="city">City</Label>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => <Input id="city" placeholder="City" {...field} />}
                            />
                            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="postalCode">Postal Code</Label>
                            <Controller
                                name="postalCode"
                                control={control}
                                render={({ field }) => <Input id="postalCode" placeholder="Postal Code" {...field} />}
                            />
                            {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="country">Country</Label>
                            <Controller
                                name="country"
                                control={control}
                                render={({ field }) => <Input id="country" placeholder="Country" {...field} />}
                            />
                            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                        </div>
                        <Button type="submit" className="w-full">Place Order</Button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <Card key={item.id} className="mb-4">
                                <CardContent>
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <p className="text-sm">{item.description}</p>
                                    <div className="flex justify-between">
                                        <span>Price</span>
                                        <span>₹{item.Price[0].Rupee.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Quantity</span>
                                        <span>{item.quantity}</span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>₹{(item.Price[0].Rupee * item.quantity).toFixed(2)}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center h-screen">
                            <p className="text-lg font-semibold mb-2">Your cart is empty</p>
                            <Button asChild>
                                <Link href="/">Browse Products</Link>
                            </Button>
                        </div>
                    )}
                    {cartItems.length > 0 && (
                        <Card>
                            <CardContent>
                                <h3 className="text-xl font-bold">Total</h3>
                                <div className="flex justify-between font-bold">
                                    <span>Total Amount</span>
                                    <span>₹{totalAmount.toFixed(2)}</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </main>
    );
}
