"use client";

import styles from "./banner.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];

  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <div
      className={styles.banner}
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        src={covers[index]}
        alt="cover"
        fill
        priority
        className="object-cover"
      />

      <div className={styles.bannerText}>
        <h1 className="text-4xl font-medium">
          where every event finds its venue
        </h1>

        <h3 className="text-xl">
          Finding the perfect venue has never been easier. Whether it's a
          wedding, corporate event, or private party, we connect people to the
          perfect place.
        </h3>
      </div>

      <button
        className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </div>
  );
}