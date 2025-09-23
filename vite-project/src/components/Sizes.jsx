import Size1 from "../assets/Size1.jpg";
function Sizes() {

    return(

        <section className="w-screen min-h-screen bg-black flex flex-col justify-center items-center" >
           
           <div className="bg-zinc-800  mx-36 mt-16 flex justify-center items-center w-fit h-fit ">
            <img src={Size1} alt="Sizes" className={`w-auto h-auto rounded-xs`}/>
           </div>

           <div className = {` mt-10 mb-10`}>
            <div className={`text-white rounded-full px-3 py-1 flex items-center gap-3 bg-neutral-700`}>
                <button className = {`px-6 py-3 bg-black rounded-full`}>Macro</button>
                <button className = {`px-6 py-3 bg-black rounded-full`}>13 mm</button>
                <button className = {`px-6 py-3 bg-black rounded-full`}>24 mm</button>
                <button className = {`px-6 py-3 bg-black rounded-full`}>28 mm</button>
                <button className = {`px-6 py-3 bg-black rounded-full`}>35 mm</button>
                <button className = {`px-6 py-3 bg-black rounded-full`}>48 mm</button>
                <button className = {`px-6 py-3 bg-black rounded-full`}>120 mm</button>

            </div>
           </div>

        </section>
    )
}

export default Sizes;