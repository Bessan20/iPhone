import { useRef, useEffect, useState } from "react";

import iPhone from '../assets/iPhone1.jpg'
function Hero() {

    const imgRef = useRef(null);
    const [showAnim, setShowAnim] = useState(false);

    useEffect(() => {
        const imgElement = imgRef.current;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowAnim(true);
                } else {
                    setShowAnim(false);
                }
            },
            { threshold: 0.5 }
        );
        if (imgElement) {
            observer.observe(imgElement);
        }
        return () => {
            if (imgElement) {
                observer.unobserve(imgElement);
            }
        };
    }, []);
    return (
        
        <section className="relative w-screen h-screen flex items-start justify-center overflow-hidden bg-black pt-2">
            <img
                ref={imgRef}
                src={iPhone}
                alt="iPhone"
                className={`h-[600px] w-full object-contain ${showAnim ? "animate-hero-entry" : ""}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-white  text-3xl px-6 py-3 ">
                    iPhone 16 Pro
                </h1>
                <button className="mt-64   bg-blue-600 text-white w-16 h-14 flex items-center justify-center rounded-full text-lg font-bold shadow-lg hover:bg-blue-700 transition">
                    Buy
                </button>
            </div>
            
        </section>
    )
};

export default Hero;