import { createContext, useState } from "react";

export const AlamatContext = createContext();

// const email = localStorage.getItem("email");

const dataAlamat = [{}];

export default function AlamatCotextProvider(props) {
  const { children } = props;
  const [alamat, setAlamat] = useState(dataAlamat);
  return (
    <AlamatContext.Provider value={{ alamat, setAlamat }}>
      {children}
    </AlamatContext.Provider>
  );
}
