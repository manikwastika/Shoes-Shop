import { useContext } from "react";
import { UsernameContext } from "../context/Username";

export default function useUsername() {
  return useContext(UsernameContext);
}
