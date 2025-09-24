import appleLogo from '../assets/apple.png';
import searchLogo from '../assets/search.png';


function Navbar1() {

    return (

        <nav className="sticky top-0 z-50  w-screen bg-black  ">
            
         <ul className="flex flex-1 justify-evenly justify-center space-x-12 p-6 text-[13px] font-light text-neutral-300">
               
               
               <li><img src ={appleLogo} alt ="apple logo" className='w-4 h-4'></img></li>              
                <li>Mac</li>
               <li>iPad</li>
               <li>iPhone</li>
               <li>Watch</li>
               <li>AirPods</li>
               <li>Tv & Home</li>
               <li>Entertainment</li>
               <li>Support</li>
               <li>Where to Buy</li>
               <li><img src ={searchLogo} alt ="search logo" className='w-5 h-5'></img></li>
               
               
               
            </ul>
            
        </nav>
    )

};

export default Navbar1;