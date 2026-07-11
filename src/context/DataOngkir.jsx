import { createContext } from "react";

export const OngkirContext = createContext();

const ongkir = [
  {
    id: 1,
    harga: 50000,
    nama: "J&W Fast Express",
    deskripsi: "Dikirim secepat Kilat",
  },
  {
    id: 2,
    harga: 30000,
    nama: "Naga Percel",
    deskripsi: "Estimasi diterima dalam 3 hari",
  },
  {
    id: 3,
    harga: 10000,
    nama: "JMBT Express Hemat",
    deskripsi: "Estimasi tiba dalam 1 minggu",
  },
];

export default function OngkirCotextProvider(props) {
  const { children } = props;
  return (
    <OngkirContext.Provider value={{ ongkir }}>
      {children}
    </OngkirContext.Provider>
  );
}
