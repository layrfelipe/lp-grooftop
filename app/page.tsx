"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import styles from "./page.module.scss";

export default function Home() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const section = searchParams.get('section');
    let targetId: string | null = null;

    if (section === 'explorers') {
      targetId = 'forCityExplorers';
    } else if (section === 'owners') {
      targetId = 'forRooftopOwners';
    }

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('section');
      window.history.replaceState({}, '', currentUrl.toString());
    }
  }, [searchParams]);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <FeatureSection />
      </main>
    </div>
  );
}
