import React from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from 'lucide-react';
import { Button } from "./ui/button";
import { Product } from "@/type/types";

interface ProductCardProps {
    data: Product["attributes"];
}

export default function ProductCard({ data }: ProductCardProps) {
    return (
        <Card className="shadow-lg ">
            <CardContent className='p-6'>
                <div className="flex gap-4 items-center">
                    <div className="w-2/6">
                        <Image
                            alt="Product"
                            width={287}
                            height={134}
                            className="h-auto object-cover rounded"
                            src={data.FeaturedImage.data.attributes.url}
                        />
                    </div>
                    <div className="flex flex-col justify-between w-8/12 gap-2">
                        <div className="flex justify-between items-start gap-4">
                            <h3 className="text-xl font-bold uppercase">{data.Name}</h3>
                            <Image
                                className="w-5 h-5 object-contain"
                                alt="Tag"
                                width={20}
                                height={20}
                                src={data.tag.data.attributes.Name === "Veg" ? "/images/veg.svg" : "/images/non_veg.png"}
                            />
                        </div>

                        <p className="text-sm text-gray-600">{data.Description}</p>

                        <div className="flex justify-between items-center mt-2">
                            <p className="text-xl font-semibold">₹{data.Price[0].Rupee}</p>
                            <Button variant="outline" className="flex items-center">
                                Add <Plus className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
