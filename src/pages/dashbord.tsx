import styles from "@/styles/app.module.scss";
import { Sidebar }from "../components/sidebar";
import { Box } from "@/components/box";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.conteudoPrincipal}>
        <Box title="Teste" children='teste2'></Box>
      </main>
    </div>
  );
}