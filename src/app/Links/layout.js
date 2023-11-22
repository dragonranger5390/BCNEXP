import FTry from "../../../Components/FTry";
import Footer from "../../../Components/Footer";
import NavBar from "../../../Components/Navbar";
import PriceTab from "../../../Components/PriceTab";
import Topper from "../../../Components/Topper";

export default function PricesLayout({ children }) {
    return <>
    <main className="block bg-gradient-to-b from-bg-from-links to-bg-to-links">
        {children}
    </main>
    </>
  }