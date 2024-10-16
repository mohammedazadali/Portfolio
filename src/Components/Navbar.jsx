import React, { useEffect, useState } from 'react';
import { NavItem } from '../Constant';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import { logo } from '../assets/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap'; // Import GSAP

const Navbar = () => {
  const [mobilenav, setMobileNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true); // Control navbar visibility

  function handleNav() {
    setMobileNav(!mobilenav);
  }

  // Handle scroll lock for mobile nav
  useEffect(() => {
    if (mobilenav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobilenav]);

  // GSAP Scroll Detection: Show/Hide Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarVisible(false); // Hide navbar when scrolling down
      } else {
        setNavbarVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // GSAP Animation for sliding navbar
  useEffect(() => {
    gsap.to('.navbar', {
      y: navbarVisible ? 0 : '-100%', // Slide the navbar up or down
      duration: 0.5, // Animation duration
      ease: 'power2.out', // Smooth easing
    });
  }, [navbarVisible]);

  return (
    <nav className='navbar flex fixed w-full z-10 justify-between bg-white md:px-[80px] px-[10px] py-[20px] border-b border-gray-100 items-center'>
      <Link to='/' spy={true} smooth={true} offset={-70} duration={500}>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='md:w-[65px] w-[50px]' />
        </div>
      </Link>
      <ul className='md:flex hidden items-center gap-[50px]'>
        {NavItem.map((nav, i) => (
          <li key={i} className='text-[20px]'>
            <Link to={nav.link} spy={true} smooth={true} offset={-70} duration={500} className='nav-link'>
              {nav.name}
            </Link>
            <hr className='h-[3px] btn-gradient rounded-lg w-0 transition-all nav-linkline' />
          </li>
        ))}
      </ul>

      <Link spy={true} smooth={true} offset={-70} duration={500}>
        <Button title='Contact Me' className='md:block hidden bg-gray-200' />
      </Link>

      <span onClick={handleNav} className='text-[22px] text-gray-500 md:hidden block'>
        {mobilenav ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </span>

      {/* mobile nav */}
      <div className={`fixed top-[80px] bg-white w-[90%] h-screen z-50 md:hidden flex flex-col gap-[20px] overflow-y-auto ${mobilenav && 'mob-active' } mob-nav`}>
        <ul className='absolute flex flex-col items-center w-full gap-[20px]'>
          {NavItem.map((nav, i) => (
            <li key={i} className='p-[10px]'>
              <Link
                to={nav.link}
                onClick={() => {
                  setMobileNav(false);
                  console.log(mobilenav);
                }}
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                {nav.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to='/contact'
              onClick={() => {
                setMobileNav(false);
                console.log(mobilenav);
              }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
