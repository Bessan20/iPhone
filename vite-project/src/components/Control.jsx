import iPhoneHands from "../assets/iPhoneHands.jpg";
function Control() {

    return(

        <section className="w-screen min-h-screen bg-black justify-center items-center flex flex-col group">
            
            <div className="mt-36" >
                <span className = "text-white font-bold text-6xl">Take total</span>
                
            </div> 

            <div className=" mt-2 relative flex justify-center">
                

                <span className = "text-white font-bold text-6xl mx-auto w-fit group-hover:drop-shadow-[0_0_50px_#f4a261] glowing-text ">Camera Control.</span>

            </div>
            
            <div className="mt-36">
                <img src={iPhoneHands} alt="iPhone Hands" className="w-full h-auto"/>
            </div>
            
        </section>

    )
}

export default Control;