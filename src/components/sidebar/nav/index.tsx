import styles from "./nav.module.scss";
import { ChartLogo, StoreLogo } from "@/components/svgs";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/dashbord">
        <a>
          <ChartLogo />
        </a>
      </Link>
      <Link href="/lancamentos">
        <a>
          <StoreLogo />
        </a>
      </Link>
    </div>
  );
};
