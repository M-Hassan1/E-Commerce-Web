import NavBarPage from "../Components/views/NavBar/NavBar-For-Pc"

import Homecarousel from "../Components/views/HeroSection/HomePage/Homecarousel";
import SecondSecHead from "../Components/views/HeroSection/HomePage/SecondSecHead";
import ProductPage from "../Components/views/HeroSection/Product/ProductPage";
import ProductDetails from "../Components/views/HeroSection/DetailsPage/ProductDetails";
import Footer from "../Components/views/FooterFile/Footer";
import EndWeb from "@/Components/views/HeroSection/EndPage/EndWeb";


export default function Home() {
  return (
    <>
    <NavBarPage />
    <div>
      <Homecarousel />
      <SecondSecHead />
      <ProductPage />
      <ProductDetails />
      <EndWeb />
    </div>
    <Footer />


    </>
  )
}
