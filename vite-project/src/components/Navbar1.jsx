import {useState} from 'react';
import appleLogo from '../assets/apple.png';
import searchLogo from '../assets/search.png';


function Navbar1() {

  const [hovered, setHovered] = useState(null);

    return (

        <nav className={`sticky top-0 z-50 w-screen ${hovered ? "bg-neutral-900" : "bg-black"}`}>
      <ul className="flex flex-1 justify-evenly items-center space-x-12 p-6 text-[13px] font-light text-neutral-300">
        <li><img src={appleLogo} alt="apple logo" className='w-4 h-4' /></li>
        <li onMouseEnter={() => setHovered(
            <div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore Mac</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>Explore All Mac</li>
                        <li>MacBook Air</li>
                        <li>MacBook Pro</li>
                        <li>iMac</li>
                        <li>Mac mini</li>
                        <li>Mac Studio</li>
                        <li>Displays</li>
                    </ul>
                    <div>
                    <div className={`text-sm`}>Compare Mac</div>
                    <div className={`text-sm`}>Mac does that</div>
                    </div>
                    </div>
                    
                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>More from Mac</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>Mac Support</li>
                        <li>Apple intelligence</li>
                        <li>Apps by Apple</li>
                        <li>Continuity</li>
                        <li>iCloud+</li>
                    </ul>
                    </div>
                    

                 
                        
            </div>)} onMouseLeave={() => setHovered(null)}   className="cursor-pointer">Mac</li>
             <li onMouseEnter={() => setHovered(
            <div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore iPad</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>Explore All iPad</li>
                        <li>iPadBook Air</li>
                        <li>iPadBook Pro</li>
                        <li>iPad</li>
                        <li>iPad mini</li>
                        <li>Apple Pencil</li>
                        <li>Keyboards</li>
                    </ul>
                    <div>
                    <div className={`text-sm`}>Compare iPad</div>
                    <div className={`text-sm`}>iPad does that</div>
                    </div>
                    </div>
                    
                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>More from iPad</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>iPad Support</li>
                        <li>Apple intelligence</li>
                        <li>iPad by Apple</li>
                        <li>iCloud+</li>
                    </ul>
                    </div>
                    

                 
                        
            </div>)} onMouseLeave={() => setHovered(null)}   className="cursor-pointer">iPad</li>
        <li onMouseEnter={() => setHovered(
            <div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore iPhone</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>Explore All iPhone</li>
                        <li>iPhone 16 Pro</li>
                        <li>iPhone 16</li>
                        <li>iPhone 16e</li>
                        <li>iPhone 15</li>
                        
                    </ul>
                    <div>
                    <div className={`text-sm`}>Compare iPhone</div>
                    <div className={`text-sm`}>Switch from Android</div>
                    </div>
                    </div>
                    
                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>More from iPhone</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>iPhone Support</li>
                        <li>Apple intelligence</li>
                        <li>iPad by Apple</li>
                        <li>iPhone Privacy</li>
                        <li>iCloud+</li>
                    </ul>
                    </div>
                    

                 
                        
            </div>)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">iPhone</li>
        <li onMouseEnter={() => setHovered("Watch")} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Watch</li>
        <li onMouseEnter={() => setHovered("AirPods")} onMouseLeave={() => setHovered(null)} className="cursor-pointer">AirPods</li>
        <li onMouseEnter={() => setHovered("Tv & Home")} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Tv & Home</li>
        <li onMouseEnter={() => setHovered("Entertainment")} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Entertainment</li>
        <li onMouseEnter={() => setHovered("Support")} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Support</li>
        <li onMouseEnter={() => setHovered("Where to Buy")} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Where to Buy</li>
        <li><img src={searchLogo} alt="search logo" className='w-5 h-5' /></li>
      </ul>
      {hovered && (
        <div className="absolute px-16 pt-4 pb-16 top-full z-50 w-screen bg-neutral-900 text-white text-center py-8">
          {hovered} 
        </div>
      )}
    </nav>
    )

};

export default Navbar1;