import  Screen3 from "../assets/Screen3.jpg";
function Section2() {

    return(

        <section className = {`w-screen min-h-screen bg-black`}>
            <div className={`mx-32 py-2 flex flex-row items-center justify-between gap-16`}>
                <div className="flex flex-col justify-center items-start  gap-12">
                     <h1 className="text-3xl font-bold text-white ">Make the most of your megapixels.</h1>
                    <p className="text-neutral-500 font-bold text-m">Personalize every style even more with the new control pad, which makes it <span className ={`text-white`}>easy to adjust tone and color simultaneously</span>. You can also use the slider to adjust the intensity of the specific colors, instead of applying a one-size-fits-all approach.
                    </p>
                </div>
                <div className="my-32 flex justify-center items-end ">
                    <img src={Screen3} alt="Screen3" className="w-auto max-w-md md:max-w-lg lg:max-w-xl h-auto "/>
                </div>
        
        </div>
        </section>
    );

}

export default Section2;