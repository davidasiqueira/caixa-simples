import styles from "@/styles/app.module.scss";
import { Sidebar } from "../components/sidebar";
import { Box } from "@/components/box";
import { InfoCard } from "@/components/infoCard";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.conteudoPrincipal}>
        <Box title="Dashbord">
          <div className={styles.accontCardWrapper}>
          <InfoCard
            mediaUltimos30Dias={600}
            totalHoje={660}
            accontName="Todas as contas"
            cardColor="#C361FF"
            infoGrafico={{
              series: [
                {
                  name: "teste",
                  data: [
                    110, 100, 200, 250, 300, 215, 334, 324, 342, 342, 342, 342,
                    234, 324, 434 , 110, 100, 200, 250, 300, 215, 334, 324, 342, 342, 342, 342,
                    234, 324, 434
                  ],
                },
              ],
            }}
          />
          <InfoCard
            mediaUltimos30Dias={300}
            totalHoje={250}
            accontName="Conta: cash"
            cardColor="#7B61FF"
            infoGrafico={{
              series: [
                {
                  name: "teste",
                  data: [
                    110, 100, 200, 250, 300, 215, 334, 324, 342, 342, 342, 342,
                    234, 324, 434 , 110, 100, 200, 250, 300, 215, 334, 324, 342, 342, 342, 342,
                    234, 324, 434
                  ],
                },
              ],
            }}
          />
          <InfoCard
            mediaUltimos30Dias={200}
            totalHoje={60}
            accontName="Conta: Pix"
            cardColor="#007AFF"
            infoGrafico={{
              series: [
                {
                  name: "teste",
                  data: [
                    110, 100, 200, 250, 300, 215, 334, 324, 342, 342, 342, 342,
                    234, 324, 434 , 110, 100, 200, 250, 300, 215, 334, 324, 342, 342, 342, 342,
                    234, 324, 434
                  ],
                },
              ],
            }}
          />
          <InfoCard
            mediaUltimos30Dias={400}
            totalHoje={300}
            accontName="Conta: Cartão"
            cardColor="#00A62E"
            infoGrafico={{
              series: [
                {
                  name: "teste",
                  data: [
                    110, 100, 200, 250, 300, 215, 334, 324, 342, 342, 342, 342,
                    234, 324, 434 , 110, 100, 200, 250, 300, 215, 334, 324, 342, 342, 342, 342,
                    234, 324, 434
                  ],
                },
              ],
            }}
          />
          </div>
        </Box>
      </main>
    </div>
  );
}
