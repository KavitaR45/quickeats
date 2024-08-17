"use client"
import React from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from 'lucide-react';
import { Button } from "./ui/button";
import { Product } from "@/type/types";
import { useCart } from '@/context/cartContext';
import {toast } from 'sonner'
interface ProductCardProps {
  prodData: Product;
}

export default function ProductCard({ prodData }: ProductCardProps) {
  let  data = prodData.attributes || {
    Name: '',
    Price: [{ Rupee: 0 }],
    FeaturedImage: { data: { attributes: { url: '' } } },
    tag: { data: { attributes: { Name: '' } } },
    Description: ''
  };
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: prodData.id,
      Name: data.Name,
      Price: data.Price,
      FeaturedImage: data.FeaturedImage.data.attributes.url,
      tag: data.tag.data.attributes.Name,
      quantity: 1,  // Initial quantity set to 1
    });
    toast.success('Added to cart')
  };
  return (
    <>
    <Card className="shadow-lg h-full">
      <CardContent className='p-6 h-full'>
        <div className="flex gap-4 items-start h-full">
          <div className="w-2/6">
            <Image
              alt="Product"
              width={287}
              height={134}
              className="h-auto object-cover rounded"
              src={data.FeaturedImage.data.attributes.url}
            />
          </div>
          <div className="flex flex-col justify-between w-8/12 gap-2 h-full">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-xl font-bold uppercase line-clamp-2 overflow-hidden">
                {data.Name}
              </h3>
              <Image
                className="w-5 h-5 object-contain"
                alt="Tag"
                width={20}
                height={20}
                src={data.tag.data.attributes.Name === "Veg" ? "/images/veg.svg" : "/images/non_veg.png"}
              />
            </div>

            <p className="text-sm text-gray-600 line-clamp-2 overflow-hidden">
              {data.Description}
            </p>

            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold">₹{data.Price[0].Rupee}</p>
              <Button variant="outline" className="flex items-center" onClick={handleAddToCart}>
                Add <Plus className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
    </>
  );
}
