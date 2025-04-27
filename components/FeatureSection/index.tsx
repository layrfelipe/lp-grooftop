import Image from 'next/image';
import styles from './FeatureSection.module.scss';

export default function FeatureSection() {
  return (
    <section className={styles.features}>
      <div className={styles.featureContainer} id="forCityExplorers">
        <div className={styles.featureColumn}>
          <div className={styles.headlines}>
            <p>For City Explorers & Experience Seekers</p>
            <h2>Private rooftops.<br/>Elevated moments.</h2>
            <h4>You're not here for the ordinary. You want views, vibes, and VIP access. Grooftop opens up the city&apos;s most exclusive rooftops for everything from spontaneous dates to curated events.</h4>
          </div>

          <div className={styles.content}>
            <div className={styles.contentItem}>
              <div className={styles.iconWrapper}>
                <Image className={styles.icon} src="/icons/grooftop.png" alt="Review chat icon" width={400} height={215} />
              </div>
              <h3>Find rooftops with filters for view, amenities, accessibility & mood</h3>
            </div>

            <div className={styles.contentItem}>
              <div className={styles.iconWrapper}>
                <Image className={styles.icon} src="/icons/book.png" alt="Review chat icon" width={400} height={229} />
              </div>
              <h3>Find your rooftop. Tap to book. No endless chats or negotiation headaches.</h3>
            </div>

            <div className={styles.contentItem}>
              <div className={styles.iconWrapper}>
                <Image className={styles.icon} src="/icons/review-chat.png" alt="Review chat icon" width={400} height={286} />
              </div>
              <h3>See real reviews, save favorites, 
              and share your spots</h3>
            </div>
          </div>

          <div className={styles.cta}>
            <button className={styles.ctaButton} id={styles.webCta}>Try it on the Web</button>
            <button className={styles.ctaButton} id={styles.androidCta}>Get it on Android</button>
          </div>
        </div>

        <div className={styles.featureColumn}>
          <div className={styles.featureImageWrapper}>
            <Image className={styles.featureImage} src="/images/image-1.png" alt="People engaging with each other on a beautiful rooftop sunset" width={1123} height={933} />
          </div>
        </div>

      </div>

      <div className={styles.featureContainer} id="forRooftopOwners">
        <div className={styles.featureColumn}>
          <div className={styles.featureImageWrapper}>
            <Image className={styles.featureImage} src="/images/image-2.png" alt="Man on top of a rooftop on urban setting" width={1123} height={934} />
          </div>
        </div>

        <div className={styles.featureColumn}>
          <div className={styles.headlines}>
            <p>For Rooftop Owners</p>
            <h2>An empty rooftop is<br/>money on pause.</h2>
            <h4>Have a killer view? Make it work for you. Whether it&apos;s your private terrace or a business rooftop, Grooftop helps you turn unused space into a steady income</h4>
          </div>

          <div className={styles.content}>
            <div className={styles.contentItem}>
              <div className={styles.iconWrapper}>
                <Image className={styles.icon} src="/icons/settings.png" alt="Review chat icon" width={400} height={215} />
              </div>
              <h3>Easy listing setup in minutes.<br/>Full control over availability and pricing.</h3>
            </div>

            <div className={styles.contentItem}>
              <div className={styles.iconWrapper}>
                <Image className={styles.icon} src="/icons/book.png" alt="Review chat icon" width={400} height={229} />
              </div>
              <h3>Chat directly with guests through the app.<br/>No third-party tools, no delays.</h3>
            </div>

            <div className={styles.contentItem}>
              <div className={styles.iconWrapper}>
                <Image className={styles.icon} src="/icons/review-chat.png" alt="Review chat icon" width={400} height={286} />
              </div>
              <h3>We handle all payments securely, so you get<br/>paid without lifting a finger.</h3>
            </div>
          </div>

          <div className={styles.cta}>
            <button className={styles.ctaButton} id={styles.webCta}>Try it on the Web</button>
            <button className={styles.ctaButton} id={styles.androidCta}>Get it on Android</button>
          </div>
        </div>
      </div>

      <div className={styles.featureContainer}>
        <div className={styles.featureCentered}>
          <h2>Grooftop isn&apos;t just a platform. It&apos;s a view of what life could be.</h2>
          <h4>We don&apos;t sell stays. We unlock experiences — spontaneous, stylish, social. Live above the noise. Let your rooftop rise with you.</h4>
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src="/images/image-3.png" alt="Man and woman drinking on a rooftop under beautiful sunset" width={1281} height={792} />
          </div>
          <h3 className={styles.ctaTextStrong}>We&apos;re live in Rio. Expanding soon.</h3>
          <h3 className={styles.ctaText}>Be part of the Rooftops revolution</h3>
          <div className={styles.cta}>
            <button className={styles.ctaButton} id={styles.webCta}>Try it on the Web</button>
            <button className={styles.ctaButton} id={styles.androidCta}>Get it on Android</button>
          </div>
        </div>
      </div>
    </section>
  );
}