import React  , {useState } from "react";
import Size1 from "../assets/Size1.jpg";
import Size2 from "../assets/Size2.jpg";
import Size3 from "../assets/Size3.jpg";
import Size4 from "../assets/Size4.jpg";
import Size5 from "../assets/Size5.jpg";
import Size6 from "../assets/Size6.jpg";
import Size7 from "../assets/Size7.jpg";

function Sizes() {

    const [selectedSize , setSelectedSize] = useState("Size1");

    const images = {

        "Size1" : Size1,
        "Size2" : Size2,
        "Size3" : Size3,
        "Size4" : Size4,
        "Size5" : Size5,
        "Size6" : Size6,
        "Size7" : Size7
    };

    const descriptions = {

        "Size1" : "0.5x Macro",
        "Size2" : "0.5x Ultra Wide",
        "Size3" : "1x Fusion 24 mm",
        "Size4" : "1.2x Fusion 28 mm",
        "Size5" : "1.5x Fusion 35 mm",
        "Size6" : "2x Telephoto",
        "Size7" : "5x Telephoto",

    };

    return(

        <section className="w-screen min-h-screen bg-black flex flex-col justify-center items-center" >
           
           <div className="bg-zinc-800  mx-36 mt-16 flex justify-center items-center w-fit h-fit ">
            <img src={images[selectedSize]} alt={selectedSize} className={`w-auto h-auto rounded-xs`}/>
           </div>

           <div className = {`sticky bottom-0 mt-10 mb-10`}>
            <div className={`text-white rounded-full px-3 py-1 flex items-center gap-1 bg-neutral-700`}>
                <button className = {`px-6 py-3  rounded-full  ${selectedSize === "Size1" ? "bg-white text-black" : "" }`}
                onClick={()=>setSelectedSize("Size1")}>
                   Macro</button>
                <button className = {`px-6 py-3  rounded-full ${selectedSize === "Size2" ? "bg-white text-black" : "" }`}
                onClick={()=>setSelectedSize("Size2")}>13 mm</button>
                <button className = {`px-6 py-3  rounded-full ${selectedSize === "Size3" ? "bg-white text-black" : "" }`}
                onClick={()=>setSelectedSize("Size3")}>24 mm</button>
                <button className = {`px-6 py-3  rounded-full ${selectedSize === "Size4" ? "bg-white text-black" : "" }`}
                onClick={()=>setSelectedSize("Size4")}>28 mm</button>
                <button className = {`px-6 py-3  rounded-full ${selectedSize === "Size5" ? "bg-white text-black" : "" }`}
                onClick={()=>setSelectedSize("Size5")}>35 mm</button>
                <button className = {`px-6 py-3  rounded-full ${selectedSize === "Size6" ? "bg-white text-black" : "" }`}
                onClick={()=>setSelectedSize("Size6")}>48 mm</button>
                <button className = {`px-6 py-3 bg- rounded-full ${selectedSize === "Size7" ? "bg-white text-black" : "" }`}
                onClick={()=>setSelectedSize("Size7")}>120 mm</button>

            </div>
            <div className=" m-4 rounded opacity-90 justify-center items-center flex">
             <p className=" text-white font-bold text-m text-neutral-500"> {descriptions[selectedSize]}</p>
            </div>
           </div>

        </section>
    )
}

export default Sizes;