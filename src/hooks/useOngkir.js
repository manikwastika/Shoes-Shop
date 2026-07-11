import { useContext } from "react";
import { OngkirContext } from "../context/DataOngkir";

export default function useOngkir() {
  return useContext(OngkirContext);
}
