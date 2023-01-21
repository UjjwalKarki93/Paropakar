import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar(){
    return(
      <div>
       <nav className={styles.navbar}>
          <span className={styles.nav}>
            <Link href="/">User Guidelines</Link>
          </span>

          <span className={styles.nav}>
            <Link href="/">Contracts</Link>
          </span>

          <span className={styles.nav}>
            <Link href="/">Donate</Link>
          </span>

          <span className={styles.nav}>
            <Link href="/">Vote</Link>
          </span>

          <span className={styles.nav}>
            <Link href="/">Others</Link>
          </span>
       </nav>
      </div>
    )
  
}