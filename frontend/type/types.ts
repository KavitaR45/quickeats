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
  
  export interface Product {
    id: number;
    attributes: {
      Name: string;
      Description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
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
  