import React, { Component } from 'react';
import { arttext } from '../assets';
import { ImgArrays } from '../constants';

class Gallery extends Component {
  state = {};
  render() {
    return (
      <section id='gallery' className='w-full'>
        <div className='flex justify-center items-center mt-[41px]'>
          <img
            src={arttext}
            alt='arttext'
            className='md:max-w-[390px] md:max-h-[115px] max-w-[273px] max-h-[80.5px] hide-observe'
          />
        </div>

        <div className='flex items-center justify-center mt-[77px] pb-[41px]'>
          <div className='grid lg:grid-cols-2 lg:gap-y-[50px] lg:gap-x-[100px] xl:gap-x-[150px] gap-y-[35px] grid-cols-1'>
            {ImgArrays.map((art, length) => (
              <img
                key={art.id}
                src={art.img}
                alt='art'
                className='md:max-w-[422px] md:max-h-[422px] max-w-[200px] max-h-[200px] art-img hide-observe'
                loading='lazy'
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
