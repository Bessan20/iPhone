import CameraScope from "../assets/CameraScope.jpg";
function Scope() {

    return(

         <section className={`min-w-screen min-h-screen bg-black flex flex-row justify-center items-center gap-x-10`}>
            <div className={`pt-8 pl-24 flex flex-col justify-center items-start gap-12  `}>
                <p className={`text-neutral-500 font-bold text-m`}>More zoom? Boom. Now you can shoot in 120 mm with the 5x Telephoto camera on both Pro models and get <span className = {`text-white`}>sharper close-ups from farther away</span>. With multiple framing options, it’s like having seven pro lenses in your pocket, everywhere you go.</p>
            </div>
            <div className=" flex flex-col justify-center items-start">
             <img src={CameraScope} alt="Camera scope" className="w-auto max-w-md md:max-w-lg lg:max-w-xl h-auto "/>
            </div>
         </section>
    )
}
 
export default Scope;