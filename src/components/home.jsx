import React, { Component } from 'react';
import { profesional, homepicture } from '../assets';

class Home extends Component {
  state = {};

  componentDidMount() {
    const drawtext = document.getElementById('draw-text');
    const textArrays = ['Painting', 'Drawing'];
    let textindex = 0;

    setInterval(() => {
      drawtext.classList.remove('show');
      drawtext.classList.add('hide');
      setTimeout(() => {
        drawtext.innerText = textArrays[textindex];
        if (textindex < 1) {
          textindex++;
        } else {
          textindex = 0;
        }
        drawtext.classList.remove('hide');
        drawtext.classList.add('show');
      }, 600);
    }, 5000);
  }

  render() {
    return (
      <section className='lg:mt-[130px] mt-[100px] w-full' id='home'>
        <div className='flex lg:flex-row flex-col justify-between items-center'>
          <div className='flex flex-col lg:items-start items-center justify-center'>
            <img src={profesional} alt='profesional' className='hide-observe' />

            <p className='text-selectable lg:ml-[74px] font-[600] font-dancingscript text-[30px] md:text-[50px] lg:text-[50px] xl:text-[64px] love-color hide-observe'>
              I love{' '}
              <span id='draw-text' className='inline-block purple-color show'>
                Drawing
              </span>
            </p>
          </div>

          <div>
            <img src={homepicture} alt='homepicture' className='hide-observe' />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
