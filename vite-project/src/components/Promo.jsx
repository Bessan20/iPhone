import Video from "../assets/iVideo.mp4";
function Promo() {

    return(
        <section className="w-screen min-h-screen bg-black flex items-center justify-center">
      <div className="w-full m-0 ">
        <video
          className="w-full h-full rounded-xl shadow-lg object-cover"
          
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