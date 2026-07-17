import { useEffect, useState } from "react";
import CustomNavbar from "../components/Fragments/Navbars";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";

function ProductPage(props) {
  const { products } = useProducts();
  const [items, setItems] = useState(products);
  // const [cart, setCart] = useState([]);
  const { cart, setCart } = useCart();

  function deleteCart(id) {
    const dataCarts = JSON.parse(localStorage.getItem("cart") || []);
    const hapusCart = dataCarts.filter((cart) => cart.id !== id);
    localStorage.setItem("cart", JSON.stringify(hapusCart));
    setCart(hapusCart);
  }

  async function handelCart(id) {
    const email = localStorage.getItem("email");
    if (email) {
      const existItems = cart.find((item) => item.id === id);
      if (existItems) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item,
          ),
        );
      } else {
        setCart([
          ...cart,
          {
            id,
            qty: 1,
          },
        ]);
      }
    } else {
      await Swal.fire({
        icon: "info",
        title: "Silahkan Login Dulu! 😄 Langsung login tanpa daftar",
        showConfirmButton: false,
        timer: 3500,
      });
      window.location.href = `${import.meta.env.BASE_URL}login`;
    }
  }

  return (
    <div className="w-full h-screen">
      <CustomNavbar
        bgStyle="bg-white"
        hoverBgRight="bg-slate-500"
        textColorRight="text-black"
        hoverTextRight="text-white"
        active="product"
        ColorRight="text-white bg-black"
      />

      <div className="w-full py-10">
        <div className="w-full flex justify-center gap-10">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white flex-col justify-between max-w-xs p-6 rounded-2xl shadow-lg border border-gray-200 flex"
            >
              <div className="flex flex-col">
                <a href="#">
                  <img
                    className="rounded-2xl shadow-sm"
                    src={product.img}
                    alt={product.name}
                  />
                </a>
                <a href="#">
                  <h5 className="mt-6 mb-2 text-xl font-bold font-Manrope tracking-tight">
                    {product.name}
                  </h5>
                </a>
                <p className="mb-6 text-sm font-Montserrat">
                  {product.deskripsi}
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <h1 className="text-[16px] font-bold ">
                    {product.harga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  {localStorage.getItem("email") &&
                    cart.some((item) => item.id === product.id) && (
                      <button
                        onClick={() => deleteCart(product.id)}
                        className="px-3 text-sm bg-red-500 text-white rounded-full hover:cursor-pointer hover:bg-red-600 transition-all duration-300"
                      >
                        x
                      </button>
                    )}
                  <button
                    onClick={() => handelCart(product.id)}
                    type="button"
                    className="flex items-center text-white bg-black hover:bg-slate-500 focus:ring-3 focus:ring-blue-500 font-semibold rounded-xl text-xs px-2.5 py-2 focus:outline-none hover:cursor-pointer transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 me-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-10">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Peringatan!</h1>
          <p className="max-w-4xl text-center font-Manrope">
            Ini hanya menggunakan Local Storage, jadi aman buat kalian yang
            penasaran ingin berinteraksi dengan UI/desainya. Silahkan bisa klik
            add to cart untuk menambahkan belanjaan ke keranjang, dan kalian
            juga bisa melihat isi keranjang dengan klik icon 🛒 keranjang di
            atas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
