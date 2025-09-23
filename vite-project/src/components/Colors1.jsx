import React  , {useState } from "react";
import Phones from "../assets/iPhones.jpg";
import Black from "../assets/Black.jpg";
import White from "../assets/white.jpg";
import Gray from "../assets/gray.jpg";
import Gold from "../assets/gold.jpg";
function Colors() {

  const [selectedColor, setSelectedColor] = useState("Phones");

  const images = {
     
    "Phones" : Phones, 
    "Black": Black,
    "White": White,
    "Gray": Gray,
    "Gold": Gold

  };

  const descriptions = { 

    "Phones" : "6.3” iPhone 16 Pro2 in four colors", 
    "Black": "6.9” iPhone 16 Pro Max & 6.3” iPhone 16 Pro2 in Black Titanium",
    "White": "6.9” iPhone 16 Pro Max & 6.3” iPhone 16 Pro2 in White Titanium",
    "Gray": "6.9” iPhone 16 Pro Max & 6.3” iPhone 16 Pro2 in Natural Titanium",
    "Gold": "6.9” iPhone 16 Pro Max & 6.3” iPhone 16 Pro2 in Desert Titanium"

  }
    return(

        <section className="w-screen min-h-screen bg-black">

         <div className="pt-32 pl-16">
            <h1 className={`text-white font-semibold text-5xl 
              `}>Take a closer look.</h1>
         </div>

         <div className=" mt-16 flex justify-center items-center">
            <img src={images[selectedColor]} alt={selectedColor} className="w-auto h-auto"
           />
         </div>

         

          <div className="sticky bottom-0 z-50 justify-center items-center flex flex-col ">
            <div className="  rounded opacity-90">
             <p className="p-2 text-white font-bold text-xs "> {descriptions[selectedColor]}</p>
            </div>
            <div className="mt-2 rounded-full px-3 py-3 flex items-center gap-3 bg-neutral-800">
              <button onClick={()=>
                setSelectedColor("Phones")
              } 
              className={`rounded-full bg-gradient-to-r from-white via-gray-400 to-black w-7 h-7
              ${selectedColor ==="Phones" ? "ring-2 ring-blue-500 ring-offset-2 " : ""}`}></button>
              
              <button onClick={()=>
                setSelectedColor("Black")
               }
                className={`rounded-full bg-zinc-950 w-7 h-7
                ${selectedColor ==="Black" ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white " : ""}`}>

              </button>
              
              <button onClick={()=>
                setSelectedColor("White")
               }
               className={`rounded-full bg-gray-300 w-7 h-7
               ${selectedColor ==="White" ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white " : ""}`}></button>
              
              <button onClick={()=>
                setSelectedColor("Gray")
               }
              className={`rounded-full bg-neutral-400 w-7 h-7
              ${selectedColor ==="Gray" ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white " : ""}`}></button>
              
              <button onClick={()=>
                setSelectedColor("Gold")
               }
              className={`rounded-full bg-[#e2c38aff] w-7 h-7
              ${selectedColor ==="Gold" ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white " : ""}`}></button>
            </div>
          </div>  
            
        </section>

    )
}

export default Colors;