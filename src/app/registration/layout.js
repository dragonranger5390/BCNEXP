import FTry from "../../../Components/FTry";
import NavBar from "../../../Components/Navbar";
import PriceTab from "../../../Components/PriceTab";
import Registration from "../../../Components/Registration";
import Topper from "../../../Components/Topper";

export default function PricesLayout({ children }) {
    return <body className="block bg-gradient-to-b from-bg-from-reg bg-bg-to-reg leading-[1.5]">
        <NavBar/>
        <Registration/>
        {children}
    </body>
  }