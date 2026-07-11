import { useParams } from "react-router";
import CustomNavbar from "../components/Fragments/Navbars";
import HistoryLayouts from "../components/Layouts/HistoryLayout";

function HistoryPage() {
  const { menu } = useParams();
  return <HistoryLayouts pages={menu} />;
}

export default HistoryPage;
