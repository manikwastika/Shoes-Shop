import { Link } from "react-router";
import CustomNavbar from "../Fragments/Navbars";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import CartContent from "../Fragments/CartContent";
import CheckOutContent from "../Fragments/CheckoutContent";
import TrackingContent from "../Fragments/TrackingContent";
import RefundContent from "../Fragments/RefundContent";

const nama = localStorage.getItem("email");

function HistoryLayouts(props) {
  const { pages } = props;
  const { cart, setCart } = useCart();

  return (
    <div className="w-full h-screen">
      <CustomNavbar
        bgStyle="bg-white"
        hoverBgRight="bg-gray-700"
        textColorRight="text-black"
        hoverTextRight="text-white"
        active="history"
        ColorRight="text-white bg-black"
      />
      {nama && (
        <div className="w-full h-[calc(100vh-60px)] flex justify-center items-center">
          <div className="flex w-full h-full max-w-[80%] max-h-[90%] rounded-3xl bg-white shadow-lg border border-gray-200">
            <div className="w-[25%] h-full border-r border-gray-200">
              <div className="w-full h-full flex justify-between flex-col">
                <div>
                  <div className="flex flex-col items-center pt-10 space-y-2 pb-10 px-10">
                    <img
                      src={`${import.meta.env.BASE_URL}img/profile/profiles.png`}
                      alt="manikwastika"
                      className="w-15 h-15 rounded-full"
                    />
                    <h1 className={`font-bold text-sm font-Raleway`}>{nama}</h1>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      to="/history/overview"
                      className={`${pages === "overview" && "bg-gray-200"} w-full h-full flex items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold hover:bg-gray-200 transition-all duration-300`}
                    >
                      <span className="w-full h-full flex items-center">
                        <ion-icon
                          name="home"
                          className="me-2 text-[15px]"
                        ></ion-icon>
                        Overview
                      </span>
                      <ion-icon
                        name="caret-forward"
                        className="text-[17px]"
                      ></ion-icon>
                    </Link>
                    <Link
                      to="/history/cart"
                      className={`${pages === "cart" && "bg-gray-200"} w-full h-full flex items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold hover:bg-gray-200 transition-all duration-300`}
                    >
                      <span className="w-full h-full flex items-center">
                        <ion-icon
                          name="cart"
                          className="me-2 text-[15px]"
                        ></ion-icon>
                        Cart
                      </span>
                      <ion-icon
                        name="caret-forward"
                        className="text-[17px]"
                      ></ion-icon>
                    </Link>
                    {localStorage.getItem("payment") ? (
                      <Link
                        to="/history/checkout"
                        className={`${pages === "checkout" && "bg-gray-200"} w-full h-full flex items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold hover:bg-gray-200 transition-all duration-300`}
                      >
                        <span className="w-full h-full flex items-center">
                          <ion-icon
                            name="bag-check"
                            className="me-2 text-[15px]"
                          ></ion-icon>
                          Chekout
                        </span>
                        <ion-icon
                          name="caret-forward"
                          className="text-[17px]"
                        ></ion-icon>
                      </Link>
                    ) : (
                      <div className="w-full h-full flex bg-gray-100 items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold transition-all duration-300">
                        <span className="w-full h-full flex items-center opacity-30">
                          <ion-icon
                            name="bag-check"
                            className="me-2 text-[15px]"
                          ></ion-icon>
                          Chekout
                        </span>
                        <ion-icon
                          name="caret-forward"
                          className="text-[17px] opacity-25"
                        ></ion-icon>
                      </div>
                    )}
                    {localStorage.getItem("payment") ? (
                      localStorage.getItem("alamat") ? (
                        <Link
                          to="/history/tracking"
                          className={`${pages === "tracking" && "bg-gray-200"} w-full h-full flex items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold hover:bg-gray-200 transition-all duration-300`}
                        >
                          <span className="w-full h-full flex items-center">
                            <ion-icon
                              name="map"
                              className="me-2 text-[15px]"
                            ></ion-icon>
                            Tracking
                          </span>
                          <ion-icon
                            name="caret-forward"
                            className="text-[17px]"
                          ></ion-icon>
                        </Link>
                      ) : (
                        <div className="w-full h-full flex bg-gray-100 items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold transition-all duration-300">
                          <span className="w-full h-full flex items-center opacity-30">
                            <ion-icon
                              name="map"
                              className="me-2 text-[15px]"
                            ></ion-icon>
                            Tracking
                          </span>
                          <ion-icon
                            name="caret-forward"
                            className="text-[17px] opacity-25"
                          ></ion-icon>
                        </div>
                      )
                    ) : (
                      <div className="w-full h-full flex bg-gray-100 items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold transition-all duration-300">
                        <span className="w-full h-full flex items-center opacity-30">
                          <ion-icon
                            name="map"
                            className="me-2 text-[15px]"
                          ></ion-icon>
                          Tracking
                        </span>
                        <ion-icon
                          name="caret-forward"
                          className="text-[17px] opacity-25"
                        ></ion-icon>
                      </div>
                    )}
                    {localStorage.getItem("payment") ? (
                      localStorage.getItem("refund") ? (
                        <Link
                          to="/history/refund"
                          className={`${pages === "refund" && "bg-gray-200"} w-full h-full flex items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold hover:bg-gray-200 transition-all duration-300`}
                        >
                          <span className="w-full h-full flex items-center">
                            <ion-icon
                              name="swap-horizontal"
                              className="me-2 text-[15px]"
                            ></ion-icon>
                            Refund
                          </span>
                          <ion-icon
                            name="caret-forward"
                            className="text-[17px]"
                          ></ion-icon>
                        </Link>
                      ) : (
                        <div className="w-full h-full flex bg-gray-100 items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold transition-all duration-300">
                          <span className="w-full h-full flex items-center opacity-30">
                            <ion-icon
                              name="swap-horizontal"
                              className="me-2 text-[15px]"
                            ></ion-icon>
                            Refund
                          </span>
                          <ion-icon
                            name="caret-forward"
                            className="text-[17px] opacity-25"
                          ></ion-icon>
                        </div>
                      )
                    ) : (
                      <div className="w-full h-full flex bg-gray-100 items-center py-4 shadow-sm px-10 font-Manrope text-sm font-semibold transition-all duration-300">
                        <span className="w-full h-full flex items-center opacity-30">
                          <ion-icon
                            name="swap-horizontal"
                            className="me-2 text-[15px]"
                          ></ion-icon>
                          Refund
                        </span>
                        <ion-icon
                          name="caret-forward"
                          className="text-[17px] opacity-25"
                        ></ion-icon>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="w-full h-full flex justify-between px-10 py-4 font-Manrope text-sm border-t-1 border-gray-200 hover:bg-gray-200 transition-all duration-300 rounded-bl-3xl">
                    <span className="text-red-500 font-bold">LogOut</span>
                    <ion-icon
                      name="log-out"
                      className="text-[17px] text-red-500"
                    ></ion-icon>
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[75%] h-full">
              <div class="w-full h-full mx-auto px-5">
                <div class="w-full h-full gap-5">
                  <div className="w-full h-[8%] flex items-center space-x-2">
                    {pages === "overview" || pages === "cart" ? (
                      <Link to="/product" className="h-full flex items-center">
                        <ion-icon
                          name="chevron-back"
                          className="text-xl"
                        ></ion-icon>
                      </Link>
                    ) : (
                      <Link
                        to="/history/cart"
                        className="h-full flex items-center"
                      >
                        <ion-icon
                          name="chevron-back"
                          className="text-xl"
                        ></ion-icon>
                      </Link>
                    )}
                    <h1 className="text-xl font-semibold">
                      {pages.charAt(0).toUpperCase() + pages.slice(1)}
                    </h1>
                  </div>
                  {pages === "cart" ? (
                    cart.length !== 0 ? (
                      <CartContent />
                    ) : (
                      <div className="w-full h-[90%]">
                        <div className="w-full h-full flex items-center justify-center flex-col">
                          <h1 className="text-3xl font-semibold mb-4 text-gray-700">
                            Ups....
                          </h1>
                          <h1 className="text-xl text-gray-500">
                            Saat ini cart sedang kosong
                          </h1>
                          <p className="text-xl text-gray-500">
                            silahkan{" "}
                            <Link
                              to="/product"
                              className="text-blue-500 hover:underline hover:text-blue-700 transition-all duration-300"
                            >
                              pilih product
                            </Link>{" "}
                            terlebih dahulu ☺️
                          </p>
                        </div>
                      </div>
                    )
                  ) : null}
                  {pages === "checkout" && <CheckOutContent />}
                  {pages === "tracking" && <TrackingContent />}
                  {pages === "refund" && <RefundContent />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoryLayouts;
