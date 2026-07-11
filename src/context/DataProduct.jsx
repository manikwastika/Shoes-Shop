import { createContext } from "react";

export const ProductsContext = createContext();

const products = [
  {
    id: 1,
    img: "/img/shoes/S1.png",
    name: "Nike Court Vision Low Canvas",
    deskripsi:
      "Classic low-top sneakers offering timeless style, durable canvas comfort, and versatile everyday wear experience.",
    harga: 799000,
  },
  {
    id: 2,
    img: "/img/shoes/S2.png",
    name: "Adidas Samba OG Black Gum",
    deskripsi:
      "Iconic leather sneakers featuring timeless design, exceptional comfort, durable gum soles, and everyday versatility.",
    harga: 1700000,
  },
  {
    id: 3,
    img: "/img/shoes/S3.png",
    name: "Adidas Galaxy 7",
    deskripsi:
      "Lightweight running shoes delivering breathable comfort, responsive cushioning, reliable traction, and everyday performance effortlessly.",
    harga: 425000,
  },
  {
    id: 4,
    img: "/img/shoes/S4.jpg",
    name: "pantofel oxford quarter cap toe",
    deskripsi:
      "Elegant leather dress shoes offering timeless craftsmanship, refined comfort, professional style, and durability daily.",
    harga: 480000,
  },
];

function DataProducts(props) {
  const { children } = props;
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default DataProducts;
