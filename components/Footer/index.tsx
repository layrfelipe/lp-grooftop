"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleLinkClick = (routePath: string, sectionId: string | null) => {
    if (sectionId) {
      router.push(`${routePath}?section=${sectionId}`);
    } else {
      router.push(routePath);
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/images/footer-logo.png" alt="Grooftop" className={styles.logo} width={808} height={102} />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <div className={styles.navColumn}>
              <li className={styles.navItem} onClick={() => handleLinkClick('/', 'explorers')}>For City Explorers & Experience Sickers</li>
              <li className={styles.navItem} onClick={() => handleLinkClick('/', 'owners')}>For Rooftop Owners</li>
            </div>
            <div className={styles.navColumn}>
              <li className={styles.navItem}>
                <Link href="/about-us" className={styles.navLink}>About Us</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/contact-us" className={styles.navLink}>Contact Us</Link>
              </li>
            </div>
          </ul>
        </nav>

        <div className={styles.cta}>
          <button className={styles.ctaButton}>Start Exploring Now</button>
        </div>
      </div>
    </footer>
  );
}