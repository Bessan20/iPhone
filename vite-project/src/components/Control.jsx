import { useRef, useEffect, useState } from "react";

import iPhoneHands from "../assets/iPhoneHands.jpg";
function Control() {
const sectionRef = useRef(null);
    const [glow, setGlow] = useState(false);

    useEffect(() => {
        const sectionElement = sectionRef.current;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setGlow(true);
                } else {
                    setGlow(false);
                }
            },
            { threshold: 0.5 }
        );
        if (sectionElement) {
            observer.observe(sectionElement);
        }
        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, []);
    return(

        <section 
        ref={sectionRef}
        className="w-screen min-h-screen bg-black justify-center items-center flex flex-col group">
            
            <div className="mt-36" >
                <span className = "text-white font-bold text-6xl">Take total</span>
                
            </div> 

            <div className=" mt-2 relative flex justify-center">
                

                <span
                    className={`text-white font-bold text-6xl mx-auto w-fit glowing-text transition-all duration-500 ${
                        glow ? "drop-shadow-[0_0_50px_#f4a261]" : ""
                    }`}
                >Camera Control.</span>

            </div>
            
            <div className="mt-36">
                <img src={iPhoneHands} alt="iPhone Hands" className="w-full h-auto"/>
            </div>
            
        </section>

    )
}

export default Control;