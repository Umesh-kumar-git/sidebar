import React, { useState } from "react";
import "./sideStyle.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxDot } from "react-icons/rx";
const Sidebarmanu = ({ item, i }) => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  return (
    <>
      <div className="manu" onClick={toggleMenu}>
        <div className="menu-item">
          <button className="active" key={i}>
            {item.icon}
            {item.name}
            <MdOutlineArrowDropDown />
          </button>
        </div>

        {IsMenuOpen && (
          <div className="subitem">
            {item.items.map((subItem, i) => {
              return (
                <button className="sub-nav" key={i}>
                  <RxDot /> {subItem}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebarmanu;
