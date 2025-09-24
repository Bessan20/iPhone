import { useRef, useEffect } from "react";
import Video from "../assets/iVideo.mp4";
function Promo() {
   
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoElement) {
            videoElement.currentTime = 0;
            videoElement.play();
        } }else {
          videoElement && videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );
    if (videoElement) {
      observer.observe(videoElement);
    }
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);
    return(
        <section className="w-screen min-h-screen bg-black flex items-center justify-center">
      <div className="w-full m-0 ">
        <video
          ref={videoRef}
          className="min-w-screen min-h-screen rounded-xl shadow-lg object-cover"
          
          autoPlay
          muted
          loop
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    )
}
export default Promo;