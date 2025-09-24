import  Screen1 from "../assets/Screen1.jpg";
function Section1() {

    return(

        <section className = {`w-screen min-h-screen bg-black`}>
            <div className={`mx-32  flex flex-row items-center justify-between gap-16`}>
                <div className="flex flex-col justify-center items-start  gap-12">
                     <h1 className="text-3xl font-bold text-white ">Lock in your look.</h1>
                    <p className="text-neutral-500 font-bold text-m">We’ve created new styles that let you <span className ={`text-white`}>dial in your exact desired look with more advanced skin-tone rendering </span>and set it across your photos.
                    </p>
                </div>
                <div className="my-32 flex justify-center items-end ">
                    <img src={Screen1} alt="Screen1" className="w-auto max-w-md md:max-w-lg lg:max-w-xl h-auto "/>
                </div>
        
        </div>
        </section>
    );

}

export default Section1;