import iPhone from "../assets/iPhone5.jpg";

function VisualI() {

    return (

        <section className=" w-screen min-h-screen bg-neutral-950 flex items-center justify-center">
            <div className="bg-black w-[70%] h-auto rounded-3xl  pt-20 pl-20 pr-16 my-40 ">
                <h1 className="text-neutral-500  text-xl">Visual intelligence</h1>
                <div className="text-neutral-100 font-bold text-3xl">
                    <span>See the world through</span><br />
                    <span>an entirely new lens.</span>
                </div>
                
                <p className="text-neutral-500  text-l mt-6">
                    Use <span className="text-neutral-100">visual intelligence</span><sup><u>5</u></sup> through Camera Control to instantly learn about things you see.
                     Just <span className="text-neutral-100">point your iPhone 16 Pro to discover more </span>or interact with something in front of you. 
                     Search for where to buy a new item you spotted,
                     identify plants and animals, and more.
                </p>
                <img src={iPhone} alt="iPhone" className="w-auto h-auto mx-auto mt-10 "/>
                
            </div>

        </section>
    )
};

export default VisualI;