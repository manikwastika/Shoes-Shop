export default function OverviewContent() {
  return (
    <div className="w-full h-full grid grid-rows-[1fr_2fr] gap-5">
      <div className="w-full h-full flex flex-col justify-center px-20 bg-gray-100 rounded-3xl">
        <img
          src={`${import.meta.env.BASE_URL}img/profile/profiles.png`}
          alt=""
          width={65}
          className="mx-auto py-3"
        />
        <button
          type="button"
          className="w-35 py-1.5 rounded-xl mx-auto bg-slate-600 text-white text-sm hover:cursor-pointer"
        >
          Choose Image
        </button>
      </div>
      <div className="w-full h-full grid grid-cols-2">
        <div className="px-20">
          <div className="w-full py-5">
            <h1 className="text-xl font-CalSans font-bold">Email</h1>
            <p className="font-Manrope font-light">
              komangmanikwastika@gmail.com
            </p>
          </div>
          <div className="w-full py-5">
            <h1 className="text-xl font-CalSans font-bold">Provinsi</h1>
            <p className="font-Manrope font-light">Bali</p>
          </div>
          <div className="w-full py-5">
            <h1 className="text-xl font-CalSans font-bold">Kecamatan / Desa</h1>
            <p className="font-Manrope font-light">Marga</p>
          </div>
          <div className="w-full py-5">
            <h1 className="text-xl font-CalSans font-bold">Kode Post</h1>
            <p className="font-Manrope font-light">123987</p>
          </div>
        </div>
        <div className="px-20">
          <div className="w-full py-5">
            <h1 className="text-xl font-CalSans font-bold">Nama Lengkap :</h1>
            <p className="font-Manrope font-light">I Komang Manik Wastika</p>
          </div>
          <div className="w-full py-5">
            <h1 className="text-xl font-CalSans font-bold">Phone Number</h1>
            <p className="font-Manrope font-light">+6283735782134</p>
          </div>
          <div className="w-full py-5">
            <h1 className="text-xl font-CalSans font-bold">Kabupaten / Kota</h1>
            <p className="font-Manrope font-light">Tabanan</p>
          </div>
          <div className="w-full py-5">
            <h1 className="text-xl font-CalSans font-bold">
              Nama Jalan dan Gang
            </h1>
            <p className="font-Manrope font-light">
              jl ble bla ble bla, gang. mawar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
