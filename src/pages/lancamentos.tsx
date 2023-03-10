import styles from "@/styles/app.module.scss";
import { Sidebar }from "../components/sidebar";
import {Conteudo} from "@/components/conteudo";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.conteudoPrincipal}>
        <Conteudo />
      </main>
    </div>
  );
}

