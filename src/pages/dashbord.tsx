import styles from "@/styles/app.module.scss";
import { Sidebar }from "../components/sidebar";
import { Box } from "@/components/box";
import { InfoCard } from "@/components/infoCard";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.conteudoPrincipal}>
        <Box title="Teste">
          <InfoCard mediaUltimos30Dias={600} totalHoje={660} accontName="Todas as contas" cardColor="C361FF" infoGrafico={{series:[{name:'teste',data: [110,100,200,250,300,215,334,324,342,342,342,342,234,324,234]}]}}/>
        </Box>
      </main>
    </div>
  );
}