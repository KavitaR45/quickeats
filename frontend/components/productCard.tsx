import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Plus } from 'lucide-react';
import { Button } from "./ui/button"
export default function ProductCard() {
    return (
        <>
            <Card>
                <CardContent className="flex justify-between gap-8">
                    <img className="w-full md:w-1/2" src="http://localhost:3000/images/coupon/coupon_1.jpeg" />
                    <div className="w-full md:w-1/2 gap-2 flex flex-col">
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-bold uppercase">Chicken Whopper</h3>
                            <img src="/images/non_veg.png" />
                        </div>
                        <p>Signature Whopper</p>
                        <div className="flex justify-between">
                            <p className="text-2xl font-bold uppercase">Rs. 199/-</p>
                            <Button variant="outline">Add<Plus className="ml-2 h-4 w-4" /></Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}