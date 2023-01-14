import {  useState } from "react";
import "./sideStyle.css";
import {AiOutlineHome,AiOutlineSetting} from "react-icons/ai";
import {MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineExplore,MdMusicNote,MdOutlineWatchLater,MdOutlineArrowDropDown} from "react-icons/md";
import {HiOutlineFire} from "react-icons/hi"
import {FaBars} from "react-icons/fa"
import Sidebarmanu from "./sidebarmanu";
// import Logo from "./logo.png";

const menuItems = [
  {
    name: "Apps",
    icon: <AiOutlineHome/>,
    path:"/"
  },
  {
    name: "Subscriptions",
    icon: <MdOutlineSubscriptions/>,
    path:"/subscription"

  },
  {
    name: "Library",
    icon: <MdOutlineVideoLibrary/>,
    path:"/library"

  },
  {
    name: "Explore",
    icon: <MdOutlineExplore/>,
    path:"/explore",
    items: ["Movies", "Live", "Gaming", "News"],
  },
  {
    name: "Settings",
    icon: <AiOutlineSetting/>,
    path:"/",
    items: ["History", "Help", "Feedback", "Reports"],
  },
  {
    name: "Tanding" ,
    icon: <HiOutlineFire/>,
    path:"/trading"
  },
  {
    name: "Music",
    icon: <MdMusicNote/>,
    path:"/music"

  },
  {
    name: "Watch Later",
    icon: <MdOutlineWatchLater/>,
    path:"/watchlater"

  },
];


;


  const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(false);

 
  const clickHandler = ()=>{
    setActiveItem(!activeItem)
  }

 
     

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
      <header className="sidebar-header">
    <div type="button" className="btn">
      <FaBars/>
    </div>
    <div className="sidebar-logo">
      VTube
    </div>
  </header>  
        { menuItems.map((item,i) => {
          if(item.items) {
            return (
             <Sidebarmanu  item ={item} key={i} />

            ) 
            
          }
          return (
            <button onClick={clickHandler}  key={i}>
            {item.icon}
           {item.name }
           </button>
          )
        }
          
        )}
      </nav>
    </aside>
  );
};

export default Sidebar
