// Dorpdown component for collapsis zone in details page and about page

import { useState } from 'react';
import arrow from '../assets/img/arrow.svg';
import PropTypes from 'prop-types';

function DropdownMenu({ title, info }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
            <h3>{title}</h3>
            <img
                src={arrow}
                alt="flèche"
                className={`arrow ${isOpen ? "down" : ""}`}
            />
      </div>
      <div className={`paragraph ${isOpen ? "animate" : ""}`}>
            {info}
      </div>
    </div>
  );
}

DropdownMenu.propTypes ={
    title : PropTypes.string.isRequired,
    info : PropTypes.node.isRequired,
  };

export default DropdownMenu;