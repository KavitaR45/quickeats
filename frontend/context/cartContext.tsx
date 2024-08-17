"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, CartContextType } from '@/type/types';

// Create a context with an empty default value
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: CartItem) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook to use the cart context
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
