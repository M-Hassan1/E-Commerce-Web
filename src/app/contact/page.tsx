import Wrapper from "../../Components/views/NavBar/NavBar-For-Pc/wrapper";
import ProductPage from "../../Components/views/HeroSection/Product/ProductPage";

const page = () => {


  return (
    <div className="w-full py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
          Smart Watchs

          </div>
        </div>

     <ProductPage />
     
     
      </Wrapper>
      </div>
  )
}

export default page;