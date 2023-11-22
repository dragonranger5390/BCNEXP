import FTry from "../../../Components/FTry";
import Footer from "../../../Components/Footer";
import NavBar from "../../../Components/Navbar";
import PriceTab from "../../../Components/PriceTab";
import Topper from "../../../Components/Topper";

export default function PricesLayout({ children }) {
    return <>
    <Topper/>
        {children}
    <main className="mt-12 mx-4" >
        <PriceTab/>
    </main>
    <FTry/>
    </>
  }