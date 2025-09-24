
import  Screen2 from "../assets/Screen2.jpg";
function Section2() {

    return(

        <section className = {`w-screen min-h-screen bg-black`}>
            <div className={`mx-32 py-2 flex flex-row items-center justify-between gap-16`}>
                <div className="flex flex-col justify-center items-start  gap-12">
                     <h1 className="text-3xl font-bold text-white ">Align with your aesthetic.</h1>
                    <p className="text-neutral-500 font-bold text-m">Our improved image pipeline also enables more creative styles, which allow you to <span className ={`text-white`}>Our improved image pipeline also enables more creative styles, which allow you to</span>through color.
                    </p>
                    <p className="text-neutral-500 font-bold text-m">With the power of A18 Pro, you can see the style applied in a live preview — like professional color grading in real time.</p>
                </div>
                <div className={`my-32 flex justify-center items-end  `}>
                    <img src={Screen2} alt="Screen2" className="w-auto max-w-md md:max-w-lg lg:max-w-xl h-auto "/>
                </div>
        
        </div>
        </section>
    );

}

export default Section2;