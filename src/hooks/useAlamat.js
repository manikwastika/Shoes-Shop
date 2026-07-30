import { useContext } from "react";
import { AlamatContext } from "../context/DataAlamat";

export default function useAlamat() {
  return useContext(AlamatContext);
}
