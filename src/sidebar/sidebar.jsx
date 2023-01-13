import {  useState } from "react";
import "./sideStyle.css";
import {AiOutlineHome,AiOutlineSetting} from "react-icons/ai";
import {MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineExplore,MdMusicNote,MdOutlineWatchLater} from "react-icons/md";
import {HiOutlineFire} from "react-icons/hi"
import {FaBars} from "react-icons/fa"
// import Logo from "./logo.png";

const menuItems = [
  {
    name: "Apps",
    icon: <AiOutlineHome/>,
  },
  {
    name: "Subscriptions",
    icon: <MdOutlineSubscriptions/>,
  },
  {
    name: "Library",
    icon: <MdOutlineVideoLibrary/>,
  },
  {
    name: "Explore",
    icon: <MdOutlineExplore/>,
    items: ["Movies", "Live", "Gaming", "News"],
  },
  {
    name: "Settings",
    icon: <AiOutlineSetting/>,
    items: ["History", "Help", "Feedback", "Reports"],
  },
  {
    name: "Tanding" ,
    icon: <HiOutlineFire/>,
  },
  {
    name: "Music",
    icon: <MdMusicNote/>,
  },
  {
    name: "Watch Later",
    icon: <MdOutlineWatchLater/>,
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
    <button type="button">
      <FaBars/>
    </button>
    <div className="sidebar-logo">
      VicTube
    </div>
  </header>
        {menuItems.map((item) => (
          <>
          <button>
            {item.icon}
           {item.name}
          </button>
          </>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar
