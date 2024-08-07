"use client"; // This marks the file as a Client Component

import { useEffect, useState } from "react"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { STRAPIGET } from "@/api/api";
import ProductCard from "@/components/productCard";
import { CategoryInterface  } from "@/type/types";
export interface Category {
  id: number;
  name: string;
  // Add other fields as needed
}
export default function Home() {
  const HomeBanner = ["/images/home_carousel/carousel_1.jpeg", "/images/home_carousel/carousel_2.jpeg", "/images/home_carousel/carousel_3.jpeg"]
  const HomeCoupon = ["/images/coupon/coupon_1.jpeg", "/images/coupon/coupon_2.jpeg", "/images/coupon/coupon_3.jpeg", "/images/coupon/coupon_4.jpeg", "/images/coupon/coupon_5.jpeg", "/images/coupon/coupon_6.jpeg"]
  const [category, setCategory] = useState<CategoryInterface []>([])
  async function FetchData() {
    let data: CategoryInterface [] = await STRAPIGET('categories');
    setCategory(data)
  }
  useEffect(() => {
    FetchData()
  }, [])
  console.log("CATEGORY", process.env)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="py-8 pt-0">
        <Carousel>
          <CarouselContent>
            {HomeBanner.map((x, i) => <CarouselItem key={"BannerImg" + i}><Image alt={"Home_Banner" + i} width="1440" height="300" src={x} /></CarouselItem>)}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="py-8 px-20">
        <h2 className="text-3xl font-bold uppercase mb-5">Our Menu</h2>
        {/* <Carousel>
          <CarouselContent>
            {category && category.data.map((x, i) => <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={"CouponImg" + i}><Image alt={"Coupon_Img" + i} width="416" height="201" src={x} /></CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </section>
      <section className="py-8 px-20">
        <h2 className="text-3xl font-bold uppercase mb-5">Kings Deal of the day</h2>
        <Carousel>
          <CarouselContent>
            {HomeCoupon.map((x, i) => <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={"CouponImg" + i}><Image alt={"Coupon_Img" + i} width="416" height="201" src={x} /></CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="py-8 px-20">
        <h2 className="text-3xl font-bold uppercase mb-5">Best Sellers</h2>
      </section>

    </main>
  );
}
