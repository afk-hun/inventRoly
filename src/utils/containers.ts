export type ProductType = {
  id: number;
  created_at: Date;
  updated_at: Date;
  shop: {
    name: string;
    url: string;
  };
  synchronized_at: Date;
  name: string;
  price: number;
  brand: string;
  unit: number;
  unit_type: string;
  image_url: string;
  barcode: string;
  description: string;
};

export type ProductsType = ProductType[];
