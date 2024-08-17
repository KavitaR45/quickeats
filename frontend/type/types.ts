// types.ts
export interface ImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: string | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Price {
  id: number;
  Pricing: string;
  Rupee: number;
}

export interface Tag {
  id: number;
  attributes: {
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
export interface Product {
  id: number;
  attributes: {
    Name: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    FeaturedImage: {
      data: ImageData;
    };
    category: {
      data: CategoryInterface;
    };
    tag: {
      data: Tag;
    };
    Price: Price[];
  };
}
  export interface CategoryAttributes {
    Name: string;
    createdAt: string;
    updatedAt: string;
    Image: {
      data: ImageData[];
    };
    products: {
      data: Product[];
    };
  }
  
  export interface CategoryInterface  {
    id: number;
    attributes: CategoryAttributes;
  }
  // types/cart.ts
export interface CartItem {
  id: number;
  Name: string;
  Price: { Rupee: number }[];
  FeaturedImage: string;
  tag: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, delta: number) => void; 
}
