import React, { Component } from 'react';
import { Navbar, Home, Gallery, Footer } from './components';

class App extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-observe');
          }
        });
      });

      const hideelement = document.querySelectorAll('.hide-observe');

      hideelement.forEach((el) => observer.observe(el));
    }, 1000);
  }

  render() {
    return (
      <div className='w-full overflow-hidden color-all'>
        <div className='lg:px-[56px] px-[20px] fixed flex justify-center items-center w-full bg-navbar z-[5]'>
          <div className='lg:max-w-[1280px] w-full'>
            <Navbar />
          </div>
        </div>

        <div className='lg:px-[56px] px-[20px] flex justify-center items-start'>
          <div className='lg:max-w-[1280px] w-full'>
            <Home />
          </div>
        </div>

        <div className='lg:px-[56px] px-[20px] flex justify-center items-center bg-gallery'>
          <div className='lg:max-w-[1280px] w-full'>
            <Gallery />
          </div>
        </div>

        <div className='lg:px-[56px] px-[20px] flex justify-center items-start'>
          <div className='lg:max-w-[1280px] w-full'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
