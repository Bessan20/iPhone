import { useRef, useEffect, useState } from "react";
import Hand from "../assets/Hand.mp4";

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
        className="w-screen min-h-screen bg-black justify-center items-center flex flex-row gap-x-16 group">
            
            <div className="mt-16" >
                
                
             

            <div className="relative flex flex-col justify-center items-center">
                <div className = "text-white font-bold text-6xl">Choose Your</div>

                <div
                    className={`text-white font-bold text-6xl mx-auto w-fit glowing-text transition-all duration-500 ${
                        glow ? "drop-shadow-[0_0_50px_#f4a261]" : ""
                    }`}
                >Photographic Style.
                </div>
                <div className = "text-white font-bold text-6xl">Change it up.</div>
                <div className = "text-white font-bold text-6xl">Change it back.</div>

            </div>
            </div>
            
            <div className="my-12 w-auto h-[500px] flex justify-center items-center">
                 <video
                className="w-full h-full object-cover rounded-3xl"
                autoPlay
               muted
              loop>
  
              <source src={Hand} type="video/mp4" />
              Your browser does not support the video tag.
               </video>
            </div>
            
        </section>

    )
}

export default Control;