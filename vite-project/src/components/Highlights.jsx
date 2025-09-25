import Girl from '../assets/Girl.mp4';
import Fin from '../assets/Fin.mp4';
import Fin1 from '../assets/Fin1.mp4';
import Fin2 from '../assets/Fin2.mp4';


import { useRef, useState, useEffect } from 'react';

function Highlights() {
    const [selectedVideo, setSelectedVideo] = useState("Fin");
    const videos = {
        "Fin": Fin,
        "Girl": Girl,
        "Fin1": Fin1,
        "Fin2": Fin2
    };

    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionElement = sectionRef.current;
        const videoElement = videoRef.current;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (videoElement) {
                        videoElement.currentTime = 0;
                        videoElement.play();
                    }
                } else {
                    videoElement && videoElement.pause();
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

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }, [selectedVideo]);

    return (
        <section
            ref={sectionRef}
            className={`w-screen min-h-screen bg-neutral-900 flex flex-col justify-center items-center`}
        >
            <div className="pt-32 px-16">
                <h1 className={`text-white font-bold text-5xl justify-start items-start flex flex-row`}>Get the highlight.</h1>
                <video
                    key={selectedVideo}
                    ref={videoRef}
                    className="mt-16 w-auto h-[80vh] object-cover rounded-3xl"
                    autoPlay
                    muted
                    playsInline
                >
                    <source src={videos[selectedVideo]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={`my-16 w-auto h-auto sticky bottom-0 text-white rounded-full flex  flex-row px-6 py-8 items-center  gap-4 bg-neutral-700 opacity-70`}>
                <button className={`bg-white h-2 w-2 rounded-full ${selectedVideo === "Fin" ? "w-10 h-2" : "" }`}
                    onClick={() => setSelectedVideo("Fin")}></button>
                <button className={`bg-white h-2 w-2 rounded-full ${selectedVideo === "Girl" ? "w-10 h-2" : "" }`}
                    onClick={() => setSelectedVideo("Girl")}></button>
                <button className={`bg-white h-2 w-2 rounded-full ${selectedVideo === "Fin1" ? "w-10 h-2" : "" }` }
                onClick={() => setSelectedVideo("Fin1")}></button>
                <button className={`bg-white h-2 w-2 rounded-full ${selectedVideo === "Fin2" ? "w-10 h-2" : "" }`}
                onClick={() => setSelectedVideo("Fin2")}></button>
            </div>
        </section>
    );
}

export default Highlights;