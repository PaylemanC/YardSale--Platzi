export interface Category {
  id: string,
  name: string
}

export interface Product {
  id: number | string,
  title: string,
  price: number,
  images: string[] | string,
  description: string,
  category: Category
}
