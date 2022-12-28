import React, { Component } from 'react';
import { logo } from '../assets';
import { NavLinks } from '../constants';

class Navbar extends Component {
  state = {
    menuvalue: false,
  };

  changemenu = () => {
    let menuvalue = this.state.menuvalue;
    menuvalue = !menuvalue;
    this.setState({ menuvalue });
  };

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

        <div
          onClick={this.changemenu}
          className={`${
            this.state.menuvalue === false ? 'closed' : 'opened'
          } flex flex-col md:hidden justify-center items-center`}
        >
          <div className='w-[55px] h-[4px] navmenu-color line-first relative' />
          <div className='w-[55px] h-[4px] navmenu-color mt-[8px] line-second relative' />
          <div className='w-[55px] h-[4px] navmenu-color mt-[8px] line-third relative' />
        </div>

        <div
          className={`${
            this.state.menuvalue === false ? 'closed-menu' : 'opened-menu'
          } md:hidden absolute top-[120%] right-5 flex flex-col h-[100px] w-[100px] items-center justify-center menu-color rounded-[10px]`}
        >
          <ul className='list-none flex flex-col items-center justify-around'>
            {NavLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${
                  index !== NavLinks.length - 1 ? 'mb-[5px]' : 'mb-0'
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
