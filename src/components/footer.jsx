import React, { Component } from 'react';
import { copyright } from '../assets';

class Footer extends Component {
  state = {};
  render() {
    return (
      <section className='w-full'>
        <div className='flex flex-row justify-start items-center py-[10px]'>
          <img
            src={copyright}
            alt='copyright'
            className='md:max-w-[30px] md:max-h-[30px] max-w-[15px] max-h-[15px] mr-[5px] hide-observe'
          />

          <h4 className='font-dancingscript text-gradient1 font-[700] md:text-[36px] text-[18px] text-selectable hide-observe'>
            Sin{' '}
            <span className='font-poppins color-white-art font-[1000]'>
              ART
            </span>
          </h4>
        </div>
      </section>
    );
  }
}

export default Footer;
