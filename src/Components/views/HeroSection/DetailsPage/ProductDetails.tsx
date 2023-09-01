import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "../../NavBar/NavBar-For-Pc/wrapper";
import ProductCarousel from "./ProCarousel";




const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] " >
        {/* Left Side Start */}
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 " >
          <ProductCarousel />          
        </div>
        {/* Left Side End*/}

        {/* Right start */}
        <div className="flex-[1] py-3" >
          <div className="text-[34px] font-semibold mb-2 " >
            First Product
            <div className="text-lg font-semibold mb-5">
            Branded Watches

            </div>
            <div className="text-lg font-semibold">
              $95
            </div>
            <div className="text-sm lg:text-md font-medium text-black/[0.5]" >
              With GST 
            </div>
            <div className="text-sm lg:text-md font-medium text-black/[0.5] mb-20">
              Conform And Order Now
            </div>
            {/* Prices */}
            <div className="mb-18">
              <div className="flex justify-between mb-2">
                <div className="text-sm lg:text-md font-semibold">
                  Check Price List
                </div>
                <div className="text-sm lg:text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Your Choice
                </div>
              </div>

            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="border rounded-md text-center py-3 font-normal hover:border-blue-800 cursor-pointer">
                $120
              </div>
              <div className="border rounded-md text-center py-3 font-normal hover:border-blue-800 cursor-pointer">
                $105
              </div>
              <div className="border rounded-md text-center py-3 font-normal hover:border-blue-800 cursor-pointer">
                $95
              </div>
              <div className="border rounded-md text-center py-3  hover:border-blue-800 cursor-pointer font-normal ">
                $90
              </div>
              <div className="border rounded-md text-center py-3 font-normal hover:border-blue-800 cursor-pointer">
                $80
              </div>
              <div className="border rounded-md text-center py-3 font-normal hover:border-blue-800 cursor-pointer">
                $60
              </div>
            <div className="text-red-600 text-sm lg:text-md mt-1">
                This Price is not available
            </div>

            </div>
          </div>
              <button className="w-full py-4 rounded-full bg-gray-800 text-slate-200 text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Add To Cart</button>
              <button className="w-full flex py-4 rounded-full  text-black border border-black text-lg font-medium transition-transform active:scale-95 items-center justify-center gap-2 mb-10 hover:opacity-75 " >Add Your Favorite
              <IoMdHeartEmpty size={20} />
              </button>
              <div>
                <div className="text-lg font-bold mb-5">
                  Item Details
                </div>
                <div className="text-md mb-5">
                Round SmartWatch Digital Watches Waterproof IP67 1 44 Inches Men Wristwatch Blood Pressure Fitness Clock Message Notification Smart Watch

                </div>
                <div className="text-md mb-5">
                Round SmartWatch Digital Watches Waterproof IP67 1 44 Inches Men Wristwatch Blood Pressure Fitness Clock Message Notification Smart Watch

                </div>
              </div>
        </div>
        {/* Right END */}
        </div>

        {/* <EndCarousel /> */}
      </Wrapper>

    </div>
  )
}

export default ProductDetails;