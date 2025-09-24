import { useRef, useEffect, useState } from "react";
import iPhoneCameras from "../assets/iPhoneCameras.jpg";

function Titanium() {

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
         className="w-screen min-h-screen bg-black justify-center items-center flex flex-col group ">
            
            <div className="mt-36" >
                <span className = "text-white font-bold text-6xl">Strength.</span>
                <span className = "text-white font-bold text-6xl">Beauty.</span><br/>
            </div> 

            <div className=" mt-2 relative flex justify-center">
                

                <span
                    className={`text-white font-bold text-6xl mx-auto w-fit glowing-text transition-all duration-500 ${
                        glow ? "drop-shadow-[0_0_50px_#f4a261]" : ""
                    }`}
                >Titanium.</span>

            </div>
            
            <div className="mt-36">
                <img src={iPhoneCameras} alt="iPhone Cameras" className="w-full h-auto"/>
            </div>
            
        </section>

    )
}

export default Titanium;