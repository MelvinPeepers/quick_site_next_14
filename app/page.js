import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.center}>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
