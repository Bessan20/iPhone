import iPhoneCameras from "../assets/iPhoneCameras.jpg";
function Titanium() {

    return(

        <section className="w-screen min-h-screen bg-black justify-center items-center flex flex-col ">
            
            <div className="mt-36" >
                <span className = "text-white font-bold text-6xl">Strength.</span>
                <span className = "text-white font-bold text-6xl">Beauty.</span><br/>
            </div> 

            <div className=" mt-2 relative flex justify-center">
                

                <span className = "text-white font-bold text-6xl mx-auto w-fit drop-shadow-[0_0_50px_#f4a261] glowing-text">Titanium.</span>

            </div>
            
            <div className="mt-36">
                <img src={iPhoneCameras} alt="iPhone Cameras" className="w-full h-auto"/>
            </div>
            
        </section>

    )
}

export default Titanium;