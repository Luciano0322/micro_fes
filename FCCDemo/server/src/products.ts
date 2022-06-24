export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Magic Cube',
    price: 99.99,
    description: 'Do you know what is it?',
    image: 'http://localhost:8080/product_1.jpeg',
    longDescription: 'Do you belived this little item could sele on Amazon...'
  },
  {
    id: 2,
    name: 'Boxing bag',
    price: 199.99,
    description: 'Do you know what is it?',
    image: 'http://localhost:8080/product_2.jpeg',
    longDescription: 'Do you belived this face could sele on Amazon...'
  },
  {
    id: 3,
    name: 'Scope',
    price: 299.99,
    description: 'Do you know what is it?',
    image: 'http://localhost:8080/product_3.jpeg',
    longDescription: 'Do you belived this little item could sele on Amazon...'
  },
  {
    id: 4,
    name: 'price up',
    price: 999.99,
    description: 'Do you know what is it?',
    image: 'http://localhost:8080/product_4.jpeg',
    longDescription: 'Do you belived this little item could sele on Amazon...'
  },
  {
    id: 5,
    name: 'just kidding',
    price: 19.99,
    description: 'Do you know what is it?',
    image: 'http://localhost:8080/product_5.png',
    longDescription: 'Do you belived this little item could sele on Amazon...'
  },
]

export default products;