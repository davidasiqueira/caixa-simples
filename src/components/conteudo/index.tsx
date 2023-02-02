import Lancamento  from "@/common/interfaces/lançamentos-interface";
import { useState } from "react";
import styles from "./conteudo.module.scss";
import { Lancamentos } from "./lancamentos";
import { UltimosLancamentos}  from "./ultimosLancamentos";

export const Conteudo = () => {
  const [lancamentos, setLancamentos] = useState<Lancamento[]>([]);

  return (
    <div className={styles.conteudo}>
      <section className={styles.lancamento}>
        <h3>Lançamentos</h3>
        <Lancamentos setLancamentos={setLancamentos} />
      </section>
      <section className={styles.ultimosLancamento}>
        <h3>Ultimos Lançamentos</h3>
        <UltimosLancamentos lancamento={lancamentos} />
      </section>
    </div>
  );
}


