import React, { Component } from 'react';
import { logo } from '../assets';
import { NavLinks } from '../constants';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className='flex flex-row justify-between items-center z-[5]'>
        <a href=''>
          <img
            src={logo}
            alt='logo'
            className='md:w-[156px] md:h-[83px] w-[124.8px] h-[66.4px]'
          />
        </a>
        <div>
          <ul className='list-none md:flex hidden flex-row'>
            {NavLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${
                  index !== NavLinks.length - 1 ? 'mr-[25px]' : 'mr-0'
                } font-poppins font-[500] text-[20px] nav-text`}
              >
                <a href={link.id}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
