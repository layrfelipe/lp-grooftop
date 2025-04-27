import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <FeatureSection />
      </main>
    </div>
  );
}
