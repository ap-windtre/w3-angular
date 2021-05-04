export interface ProductItem {
    id?: number;
    name: string;
    price: number;
    category: ProductCategory;
    quantity: number;
}

export enum ProductCategory {
  PASTA = 'pasta',
  SWEETS = 'sweets'
}
