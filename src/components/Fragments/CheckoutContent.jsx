import { Link } from "react-router";
import useOngkir from "../../hooks/useOngkir";
import { useState } from "react";

function CheckOutContent() {
  const [selectedOngkir, setSelectedOngkir] = useState();
  const { ongkir } = useOngkir();
  const payment = JSON.parse(localStorage.getItem("payment"));

  function cancelCheckout() {
    localStorage.removeItem("payment");
    window.location.href = `${import.meta.env.BASE_URL}/history/cart`;
  }
  return (
    <section class="bg-white">
      <form class="mx-auto w-full px-4 2xl:px-0">
        <div class="lg:flex lg:items-start gap-10">
          <div class="min-w-0 flex-col max-w-[60%] space-y-4">
            <div class="space-y-4">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    for="your_name"
                    class="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Nama Lengkap
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="John Doe"
                    required
                    autoFocus
                  />
                </div>

                <div>
                  <label
                    for="your_email"
                    class="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="your_email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label
                    for="phone-input-3"
                    class="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Phone Number
                    <span className="text-red-500">*</span>
                  </label>
                  <div class="flex items-center relative">
                    <button
                      type="button"
                      class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
                      type="button"
                    >
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="me-2 h-4 w-4"
                        viewBox="0 0 20 15"
                      >
                        <rect
                          width="19.6"
                          height="14"
                          x="0"
                          y="0.5"
                          rx="2"
                          fill="#FFFFFF"
                        />

                        <mask
                          id="indonesia-flag"
                          x="0"
                          y="0"
                          width="20"
                          height="15"
                          maskUnits="userSpaceOnUse"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            x="0"
                            y="0.5"
                            rx="2"
                            fill="#FFFFFF"
                          />
                        </mask>

                        <g mask="url(#indonesia-flag)">
                          {/* Merah */}
                          <rect
                            width="19.6"
                            height="7"
                            x="0"
                            y="0.5"
                            fill="#E70011"
                          />

                          {/* Putih */}
                          <rect
                            width="19.6"
                            height="7"
                            x="0"
                            y="7.5"
                            fill="#FFFFFF"
                          />
                        </g>
                      </svg>
                      +62
                    </button>
                    <div class="relative w-full">
                      <input
                        type="number"
                        class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="0813-8006-8000"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label
                      for="select-city-input-3"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Provinsi
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <select
                    defaultValue="Pilih Provinsi"
                    id="select-city-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Pilih Provinsi</option>
                    <option value="Bali">Bali</option>
                  </select>
                </div>

                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label
                      for="select-country-input-3"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Kabupaten / Kota
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <select
                    defaultValue="Pilih Kabupaten/Kota"
                    id="select-country-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Pilih Kabupaten/Kota</option>
                    <option value="Kabupaten Badung">Kabupaten Badung</option>
                    <option value="Kabupaten Bangli">Kabupaten Bangli</option>
                    <option value="Kabupaten Buleleng">
                      Kabupaten Buleleng
                    </option>
                    <option value="Kabupaten Gianyar">Kabupaten Gianyar</option>
                    <option value="Kabupaten Jembrana">
                      Kabupaten Jembrana
                    </option>
                    <option value="Kabupaten Karangasem">
                      Kabupaten Karangasem
                    </option>
                    <option value="Kabupaten Klungkung">
                      Kabupaten Klungkung
                    </option>
                    <option value="Kabupaten Tabanan">Kabupaten Tabanan</option>
                    <option value="Kota Denpasar">Kota Denpasar</option>
                  </select>
                </div>

                <div>
                  <label
                    for="kodepos"
                    class="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Kecamatan / Desa<span className="text-red-500">*</span>
                  </label>
                  <select
                    defaultValue="Pilih Kecamatan"
                    id="select-country-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Pilih Kecamatan</option>
                    {/* <!-- Kabupaten Badung --> */}
                    <option value="Abiansemal">Abiansemal</option>
                    <option value="Kuta">Kuta</option>
                    <option value="Kuta Selatan">Kuta Selatan</option>
                    <option value="Kuta Utara">Kuta Utara</option>
                    <option value="Mengwi">Mengwi</option>
                    <option value="Petang">Petang</option>

                    {/* <!-- Kabupaten Bangli --> */}
                    <option value="Bangli">Bangli</option>
                    <option value="Kintamani">Kintamani</option>
                    <option value="Susut">Susut</option>
                    <option value="Tembuku">Tembuku</option>

                    {/* <!-- Kabupaten Buleleng --> */}
                    <option value="Banjar">Banjar</option>
                    <option value="Buleleng">Buleleng</option>
                    <option value="Busungbiu">Busungbiu</option>
                    <option value="Gerokgak">Gerokgak</option>
                    <option value="Kubutambahan">Kubutambahan</option>
                    <option value="Sawan">Sawan</option>
                    <option value="Seririt">Seririt</option>
                    <option value="Sukasada">Sukasada</option>
                    <option value="Tejakula">Tejakula</option>

                    {/* <!-- Kabupaten Gianyar --> */}
                    <option value="Blahbatuh">Blahbatuh</option>
                    <option value="Gianyar">Gianyar</option>
                    <option value="Payangan">Payangan</option>
                    <option value="Sukawati">Sukawati</option>
                    <option value="Tampaksiring">Tampaksiring</option>
                    <option value="Tegalalang">Tegalalang</option>
                    <option value="Ubud">Ubud</option>

                    {/* <!-- Kabupaten Jembrana --> */}
                    <option value="Jembrana">Jembrana</option>
                    <option value="Melaya">Melaya</option>
                    <option value="Mendoyo">Mendoyo</option>
                    <option value="Negara">Negara</option>
                    <option value="Pekutatan">Pekutatan</option>

                    {/* <!-- Kabupaten Karangasem --> */}
                    <option value="Abang">Abang</option>
                    <option value="Bebandem">Bebandem</option>
                    <option value="Karangasem">Karangasem</option>
                    <option value="Kubu">Kubu</option>
                    <option value="Manggis">Manggis</option>
                    <option value="Rendang">Rendang</option>
                    <option value="Selat">Selat</option>
                    <option value="Sidemen">Sidemen</option>

                    {/* <!-- Kabupaten Klungkung --> */}
                    <option value="Banjarangkan">Banjarangkan</option>
                    <option value="Dawan">Dawan</option>
                    <option value="Klungkung">Klungkung</option>
                    <option value="Nusa Penida">Nusa Penida</option>

                    {/* <!-- Kabupaten Tabanan --> */}
                    <option value="Baturiti">Baturiti</option>
                    <option value="Kediri">Kediri</option>
                    <option value="Kerambitan">Kerambitan</option>
                    <option value="Marga">Marga</option>
                    <option value="Penebel">Penebel</option>
                    <option value="Pupuan">Pupuan</option>
                    <option value="Selemadeg">Selemadeg</option>
                    <option value="Selemadeg Barat">Selemadeg Barat</option>
                    <option value="Selemadeg Timur">Selemadeg Timur</option>
                    <option value="Tabanan">Tabanan</option>

                    {/* <!-- Kota Denpasar --> */}
                    <option value="Denpasar Barat">Denpasar Barat</option>
                    <option value="Denpasar Selatan">Denpasar Selatan</option>
                    <option value="Denpasar Timur">Denpasar Timur</option>
                    <option value="Denpasar Utara">Denpasar Utara</option>
                  </select>
                </div>

                <div>
                  <label
                    for="company_name"
                    class="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Nama Jalan dan Gang<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Jl. example Gang Example"
                    required
                  />
                </div>

                <div>
                  <label
                    for="vat_number"
                    class="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Kode Pos
                  </label>
                  <input
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="083145"
                    required
                  />
                </div>

                <div class="sm:col-span-2 w-full flex gap-5">
                  <button
                    type="submit"
                    class="flex w-[50%] items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                  >
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                    Tambah Alamat
                  </button>
                  <select className="flex w-[50%] rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900">
                    <option value="">Pilih Alamat</option>
                    <option value="rumah">Rumah</option>
                    <option value="kantor">Kantor</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900">
                Metode Pembayaran
              </h3>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        type="radio"
                        name="payment-method"
                        defaultChecked={true}
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="credit-card"
                        class="font-medium leading-none text-gray-900"
                      >
                        Cash or Duel
                      </label>
                      <p
                        id="credit-card-text"
                        class="mt-1 text-xs font-normal text-gray-500"
                      >
                        Bayar langsung ditempat
                      </p>
                    </div>
                  </div>
                </div>

                <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="pay-on-delivery"
                        aria-describedby="pay-on-delivery-text"
                        type="radio"
                        name="payment-method"
                        disabled
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="pay-on-delivery"
                        class="font-medium leading-none text-gray-900"
                      >
                        Kartu Kredit
                      </label>
                      <p
                        id="pay-on-delivery-text"
                        class="mt-1 text-xs font-normal text-gray-500"
                      >
                        Bayar dengan kartu kredit
                      </p>
                    </div>
                  </div>
                </div>

                <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="paypal-2"
                        aria-describedby="paypal-text"
                        type="radio"
                        name="payment-method"
                        disabled
                        class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                      />
                    </div>

                    <div class="ms-4 text-sm">
                      <label
                        for="paypal-2"
                        class="font-medium leading-none text-gray-900"
                      >
                        E-wallet
                      </label>
                      <p
                        id="paypal-text"
                        class="mt-1 text-xs font-normal text-gray-500"
                      >
                        Bayar dengan E-wallet Shoyyan-pay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900">
                Pilih Pengiriman
              </h3>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                {ongkir.map((expedisi) => (
                  <label
                    key={expedisi.id}
                    class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4"
                  >
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="dhl"
                          type="radio"
                          value={expedisi.id}
                          checked={selectedOngkir?.id == expedisi.id}
                          onChange={() => setSelectedOngkir(expedisi)}
                          name="delivery-method"
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600"
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <span className="block text-sm mb-0.5">
                          {expedisi.harga.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </span>
                        <label
                          for="dhl"
                          class="font-medium leading-none text-gray-900"
                        >
                          {expedisi.nama}
                        </label>
                        <p
                          id="dhl-text"
                          class="mt-1 text-xs font-normal text-gray-500"
                        >
                          {expedisi.deskripsi}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 max-w-[40%]">
            <div class="flow-root">
              <div class="-my-3 divide-y divide-gray-200">
                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500">Subtotal</dt>
                  <dd class="text-base font-medium text-gray-900">
                    {payment
                      .map((cash) => cash.subTotal)
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500">
                    Total Items
                  </dt>
                  <dd class="text-base font-medium text-blue-500">
                    {payment.map((cash) => cash.jumlahBarang)}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500">Diskon</dt>
                  <dd class="text-base font-medium text-green-500">
                    {payment
                      .map((cash) => cash.diskon)
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500">
                    Setelah Diskon
                  </dt>
                  <dd class="text-base font-medium text-gray-900">
                    {payment
                      .map((cash) => cash.setelahDiskon)
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500">
                    Biaya Admin
                  </dt>
                  <dd class="text-base font-medium text-gray-900">
                    {payment
                      .map((cash) => cash.biayaAdmin)
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500">Layanan</dt>
                  <dd class="text-base font-medium text-gray-900">
                    {payment
                      .map((cash) => cash.layanan)
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500">Ongkir</dt>
                  <dd class="text-base font-medium text-gray-900">
                    {(selectedOngkir ? selectedOngkir.harga : 0).toLocaleString(
                      "id-ID",
                      {
                        style: "currency",
                        currency: "IDR",
                      },
                    )}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-bold text-gray-900">Total</dt>
                  <dd class="text-base font-bold text-gray-900">
                    {payment
                      .map(
                        (cash) =>
                          cash.biayaAdmin +
                          cash.layanan +
                          cash.setelahDiskon +
                          (selectedOngkir ? selectedOngkir.harga : 0),
                      )
                      .toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                  </dd>
                </dl>
              </div>
            </div>

            <div class="space-y-3">
              <button
                type="submit"
                disabled={!selectedOngkir}
                className={`flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 ${
                  selectedOngkir
                    ? "bg-primary-700 hover:bg-primary-800 hover:cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Proceed to Payment
              </button>
              {localStorage.getItem("payment") && (
                <button
                  onClick={cancelCheckout}
                  type="button"
                  class="flex w-full items-center justify-center rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4  focus:ring-primary-300 hover:cursor-pointer transition-all duration-300"
                >
                  Cancel
                </button>
              )}

              <p class="text-sm font-normal text-gray-500">
                Pesanan akan langsung diproses oleh penjual setelah anda klik
                proceed to payment{" "}
                <Link
                  to="/history/cart"
                  title=""
                  class="font-medium text-primary-700 underline hover:no-underline"
                >
                  cek cart kembali
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default CheckOutContent;
