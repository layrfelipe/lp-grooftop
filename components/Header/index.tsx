"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';


export default function Header() {
  const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const currentWidth = window.innerWidth;
      setWindowSize({
        width: currentWidth,
        height: window.innerHeight,
      });
      setIsMobile(currentWidth <= 900);
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    // Add smooth scroll CSS behavior globally (optional, for anchor method)
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('resize', handleResize);
      // Clean up style on unmount
      document.documentElement.style.scrollBehavior = '';
    }
  }, []);

  const switchMobileMenuState = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleMobileLinkClick = (sectionId?: string) => {
    setIsMobileMenuOpen(false); // Close menu on click
    // Optional: If using JS scroll method, call it here
    // if (sectionId) {
    //   scrollToSection(sectionId);
    // }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {
          isMobile && (
            <>
              <div className={styles.mobileMenu}>
                <Link href="/" className={styles.logoContainer}>
                  <Image src="/images/header-logo.png" alt="Grooftop" className={styles.logo} width={847} height={107} />
                </Link>

                <div className={styles.mobileMenuButtonWrapper}>
                  <button className={styles.mobileMenuButton} onClick={switchMobileMenuState}>
                    <FaBars color="white" />
                  </button>
                </div>
              </div>

              {
                isMobileMenuOpen && (
                  <div className={styles.mobileMenuContent}>
                    <nav className={styles.mobileNav}>
                      <ul className={styles.mobileNavList}>
                        <li className={styles.mobileNavItem}>
                          <Link href="/" className={styles.mobileNavLink} onClick={() => handleMobileLinkClick()}>
                             For City Explorers & Experience Seekers
                          </Link>
                        </li>
                        <li className={styles.mobileNavItem}>
                           <Link href="/" className={styles.mobileNavLink} onClick={() => handleMobileLinkClick()}>
                             For Rooftop Owners
                           </Link>
                        </li>
                        <li className={styles.mobileNavItem}>
                          <Link href="/about-us" className={styles.mobileNavLink} onClick={() => handleMobileLinkClick()}>About Us</Link>
                        </li>
                        <li className={styles.mobileNavItem}>
                          <Link href="/contact-us" className={styles.mobileNavLink} onClick={() => handleMobileLinkClick()}>Contact Us</Link>
                        </li>
                      </ul>
                    </nav>

                    <div className={styles.mobileCta}>
                       <Link href="/" className={styles.mobileCtaButtonAnchor}>
                          <button className={styles.mobileCtaButton} onClick={() => handleMobileLinkClick()}>Start Exploring Now</button>
                       </Link>
                    </div>
                  </div>
                )
              }
            </>
          )
        }

        {
          !isMobile && (
            <>
              <Link href="/" className={styles.logoContainer}>
                <Image src="/images/header-logo.png" alt="Grooftop" className={styles.logo} fill />
              </Link>

              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>For City Explorers & Experience Seekers</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>For Rooftop Owners</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/about-us" className={styles.navLink}>About Us</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/contact-us" className={styles.navLink}>Contact Us</Link>
                  </li>
                </ul>
              </nav>

              <div className={styles.cta}>
                 <Link href="/" className={styles.ctaButtonAnchor}>
                   <button className={styles.ctaButton}>Start Exploring Now</button>
                 </Link>
              </div>
            </>
          )
        }
      </div>
    </header>
  );
}