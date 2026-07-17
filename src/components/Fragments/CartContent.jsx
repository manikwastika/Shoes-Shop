import { useState } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { Link } from "react-router";

function CartContent() {
  const [favorites, setFavorites] = useState([]);
  const { cart, setCart } = useCart();
  const { products } = useProducts();
  const [cash, setCash] = useState([]);

  const layanan = 2000;
  const biayaAdmin = 5000;

  const total = cart.reduce((acc, cartItem) => {
    const product = products.find((product) => product.id === cartItem.id);

    if (!product) return acc;

    return acc + product.harga * cartItem.qty;
  }, 0);

  const totalDiskon = products
    .filter((product) => cart.some((cartItem) => cartItem.id === product.id))
    .reduce((acc, product) => {
      const cartItem = cart.find((item) => item.id === product.id);

      const subtotal = product.harga * cartItem.qty;

      const diskon = cartItem.qty >= 3 ? product.harga * 3 * 0.1 : 0;

      return acc + diskon;
    }, 0);

  function decrementQty(id) {
    const dataCarts = JSON.parse(localStorage.getItem("cart")) || [];

    const kurangQty = dataCarts
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      })
      .filter((item) => item.qty > 0);

    localStorage.setItem("cart", JSON.stringify(kurangQty));
    setCart(kurangQty);
  }

  function incrementQty(id) {
    const dataCarts = JSON.parse(localStorage.getItem("cart") || []);
    const tambahQty = dataCarts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }

      return item;
    });

    localStorage.setItem("cart", JSON.stringify(tambahQty));
    setCart(tambahQty);
  }

  function productFavorite(id) {
    setFavorites((like) => {
      if (like.includes(id)) {
        return like.filter((item) => item !== id);
      }

      return [...like, id];
    });
  }

  function deleteCart(id) {
    const dataCarts = JSON.parse(localStorage.getItem("cart") || []);
    const hapusCart = dataCarts.filter((cart) => cart.id !== id);
    localStorage.setItem("cart", JSON.stringify(hapusCart));
    setCart(hapusCart);
  }

  function paymentProces() {
    const cartQty = cart.map((cartItem) => cartItem.qty);
    const Qty = cartQty.reduce((sum, value) => sum + value, 0);
    const hargaAsli = total - totalDiskon;
    const paymentProcesed = [
      {
        jumlahBarang: Qty,
        subTotal: total,
        diskon: totalDiskon,
        setelahDiskon: hargaAsli,
        biayaAdmin,
        layanan,
      },
    ];
    localStorage.setItem("payment", JSON.stringify(paymentProcesed));
    setCash([...cash, paymentProcesed]);
    window.location.href = `${import.meta.env.BASE_URL}/history/checkout`;
  }

  return (
    <div className="w-full h-[91%] flex gap-5 pb-10 pt-2">
      <div className="w-[70%] overflow-auto space-y-6">
        {cart.length !== 0 &&
          products
            .filter((product) =>
              cart.some((cartItem) => cartItem.id === product.id),
            )
            .map((product) => {
              const cartItem = cart.find(
                (cartItem) => cartItem.id === product.id,
              );
              return (
                <div key={product.id} className="space-y-6">
                  <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm md:p-6">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="" className="shrink-0 md:order-1">
                        <img
                          className="h-20 w-20"
                          src={product.img}
                          alt="imac image"
                        />
                        <img
                          className="hidden h-20 w-20"
                          src={product.img}
                          alt="imac image"
                        />
                      </a>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => decrementQty(product.id)}
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            className="hover:cursor-pointer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                            placeholder=""
                            value={cartItem.qty}
                            readOnly
                            required
                          />
                          <button
                            onClick={() => incrementQty(product.id)}
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            className="hover:cursor-pointer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900">
                            {product.harga.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href=""
                          className="text-base font-medium text-gray-900 hover:underline"
                        >
                          {product.name}
                        </a>

                        <div className="flex items-center gap-5 mt-2">
                          <button
                            onClick={() => productFavorite(product.id)}
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline hover:cursor-pointer"
                          >
                            <svg
                              className={`me-1.5 h-5 w-5 ${
                                favorites.includes(product.id)
                                  ? "fill-red-500 text-red-500"
                                  : "fill-none text-gray-500"
                              }`}
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
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                              />
                            </svg>
                            Add to Favorites
                          </button>

                          <button
                            onClick={() => deleteCart(product.id)}
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline hover:cursor-pointer"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
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
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>

      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 w-[20%]">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <p className="text-xl font-semibold text-gray-900">Pesanan</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500">
                  Subtotal harga
                </dt>
                {cart.length !== 0 ? (
                  <dd className="text-base font-medium text-gray-900">
                    {total.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </dd>
                ) : (
                  <dd>0</dd>
                )}
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500">Diskon</dt>
                <dd className="text-base font-medium text-green-600">
                  {totalDiskon.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">
                  Setelah diskon
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  {(total - totalDiskon).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">
                  Biaya Admin
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  {biayaAdmin.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 ">
                  Layanan
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  {layanan.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-gray-900">
                {(total - totalDiskon + biayaAdmin + layanan).toLocaleString(
                  "id-ID",
                  {
                    style: "currency",
                    currency: "IDR",
                  },
                )}
              </dd>
            </dl>
          </div>

          <Link
            onClick={paymentProces}
            type="button"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Checkout
          </Link>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500">atau</span>
            <Link
              to="/product"
              title=""
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
            >
              Lihat produk lain
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="voucher"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                kamu mempunyai Voucher atau Gift ?
              </label>
              <input
                type="text"
                id="voucher"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Masukan kode"
                required
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Gunakan Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartContent;
