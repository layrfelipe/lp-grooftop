// components/Hero/Hero.tsx
import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image using next/image with fill */}
      <Image
        src="/images/bg-home.png" // Correct path from your structure
        alt="City skyline at dusk from a rooftop perspective"
        fill
        priority // Load this image first
        quality={85} // Adjust quality
        className={styles.backgroundImage}
      />
      {/* Overlay for text readability */}
      <div className={styles.overlay}></div>

      <div className={`${styles.content} container`}>
        <h1 className={styles.title}>
          More than spaces,<br />
          stories are waiting to happen.
        </h1>
        <p className={styles.subtitle}>
          It's your gateway to unforgettable rooftop experiences<br />
          from private celebrations to sky-high escapes.
        </p>
        {/* Optional: Add a CTA button here if desired */}
      </div>
    </section>
  );
}