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
                    <div className={`flex flex-col justify-start items-start`}>
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
                    <div className={`flex flex-col justify-start items-start`}>
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
                    <div className={`flex flex-col justify-start items-start`}>
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
        <li onMouseEnter={() => setHovered(<div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore Watch</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>Explore All Apple Watch</li>
                        <li>Apple Watch Series 10</li>
                        <li>Apple Watch SE</li>
                        <li>Apple Watch Nike</li>
                        
                    </ul>
                    <div className={`flex flex-col justify-start items-start`}>
                    <div className={`text-sm`}>Compare Watch</div>
                    <div className={`text-sm`}>Why Apple Watch</div>
                    </div>
                    </div>
                    
                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>More from Watch</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>Apple Watch Support</li>
                        <li>Apps by Apple</li>
                        
                    </ul>
                    </div>
                    

                 
                        
            </div>)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Watch</li>
        <li onMouseEnter={() => setHovered(<div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore AirPods</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>Explore All AirPods</li>
                        <li>AirPods Pro 2nd generation</li>
                        <li>AirPods 2nd generation</li>
                        <li>AirPods 3nd generation</li>
                        <li>AirPods Max</li>
                        
                    </ul>
                    <div className={`flex flex-col justify-start items-start`}>
                    <div className={`text-sm`}>Compare AirPods</div>
                    
                    </div>
                    </div>
                    
                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>More from AirPods</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>AirPods Support</li>
                        <li>Apple Music</li>
                        
                    </ul>
                    </div>
                    

                 
                        
            </div>)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">AirPods</li>
        <li onMouseEnter={() => setHovered(<div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore TV & Home</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>Explore TV & Home</li>
                        <li>Apple TV 4K</li>   
                    </ul>
                    
                    </div>
                    
                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>More from Watch</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>Apple TV Support</li>
                        <li>Apple TV app</li>
                        <li>Apple TV+</li>
                        <li>Apple Music</li>
                        <li>AirPlay</li>
                        
                    </ul>
                    </div>
                    

                 
                        
            </div>)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">TV & Home</li>
        <li onMouseEnter={() => setHovered(<div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore Entertainment</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>Explore Entertainment</li>
                        <li>Apple One</li>
                        <li>Apple TV+</li>
                        <li>Apple Music</li>
                        <li>Apple Arcade</li>
                        <li>Apple Podcasts</li>
                        <li>Apple Books</li>
                        <li>App Store</li>
                        
                    </ul>
                    
                    </div>
                    
                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Support</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>Apple TV+ Support</li>
                        <li>Apple Music Support</li>
                        
                    </ul>
                    </div>
                    

                 
                        
            </div>)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Entertainment</li>
        <li onMouseEnter={() => setHovered(
            <div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore Support</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>iPhone</li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>Watch</li>
                        <li>AirPods</li>
                        <li>Music</li>
                        <li>TV</li>
                    </ul>
                    <div className={`flex flex-col justify-start items-start`}>
                    <div className={`text-sm`}>Explore Support</div>
                    
                    </div>
                    </div>

                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Get Help</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>Community</li>
                        
                    </ul>
                    </div>
                    
                    <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Helpful Topics</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-sm items-start justify-start gap-y-1`}>
                        <li>Apple Account and Password</li>
                        <li>Billing and Subscriptions</li>
                        <li>Accessibility</li>
                        
                    </ul>
                    </div>
                    

                 
                        
            </div>)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Support</li>
        <li onMouseEnter={() => setHovered(<div className = {`flex flex-row gap-x-12 items-start justify-start`}>
                 <div className={`flex flex-col gap-y-6 items-start justify-start`}>
                    <h1 className = {`text-neutral-500 text-sm`}>Explore</h1>
                    <ul className={`text-neutral-100 font-bold flex flex-col text-2xl items-start justify-start gap-y-2`}>
                        <li>Authorized Resellers</li>
                        <li>Service & Support</li>
                        
                    </ul>
                    <div className={`flex flex-col justify-start items-start`}>
                    <div className={`text-sm`}>Explore All Ways to Buy</div>
                    </div>
                    </div>      
                        
            </div>)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">Where to Buy</li>
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