"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
    width: undefined,
    height: undefined,
  });

  const router = useRouter();
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
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('resize', handleResize);
      document.documentElement.style.scrollBehavior = '';
    }
  }, []);

  const switchMobileMenuState = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleMobileLinkClick = (routePath: string, sectionId: string | null) => {
    setIsMobileMenuOpen(false);
    handleLinkClick(routePath, sectionId);
  }

  const handleLinkClick = (routePath: string, sectionId: string | null) => {
    if (sectionId) {
      router.push(`${routePath}?section=${sectionId}`);
    } else {
      router.push(routePath);
    }
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
                          <h6 className={styles.mobileNavLink} onClick={() => handleMobileLinkClick('/', 'explorers')}>
                             For City Explorers & Experience Seekers
                          </h6>
                        </li>
                        <li className={styles.mobileNavItem}>
                          <h6 className={styles.mobileNavLink} onClick={() => handleMobileLinkClick('/', 'owners')}>
                            For Rooftop Owners
                          </h6>
                        </li>
                        <li className={styles.mobileNavItem}>
                          <h6 className={styles.mobileNavLink} onClick={() => handleMobileLinkClick('/about-us', null)}>About Us</h6>
                        </li>
                        <li className={styles.mobileNavItem}>
                          <h6 className={styles.mobileNavLink} onClick={() => handleMobileLinkClick('/contact-us', null)}>Contact Us</h6>
                        </li>
                      </ul>
                    </nav>

                    <div className={styles.mobileCta}>
                       <Link href="/" className={styles.mobileCtaButtonAnchor}>
                          <button className={styles.mobileCtaButton} onClick={() => {}}>Start Exploring Now</button>
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
                    <h6 className={styles.navLink} onClick={() => handleLinkClick('/', 'explorers')}>For City Explorers & Experience Seekers</h6>
                  </li>
                  <li className={styles.navItem}>
                    <h6 className={styles.navLink} onClick={() => handleLinkClick('/', 'owners')}>For Rooftop Owners</h6>
                  </li>
                  <li className={styles.navItem}>
                    <h6 className={styles.navLink} onClick={() => handleLinkClick('/about-us', null)}>About Us</h6>
                  </li>
                  <li className={styles.navItem}>
                    <h6 className={styles.navLink} onClick={() => handleLinkClick('/contact-us', null)}>Contact Us</h6>
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