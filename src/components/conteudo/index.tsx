import styles from './conteudo.module.scss'
import Lancamentos from './lancamentos'
import UltimosLancamentos from './ultimosLancamentos'

function Conteudo() {
  return (
    <div className={styles.conteudo}>
      <section className={styles.lancamento}>
          <h3>Lançamentos</h3>
          <Lancamentos />
      </section>
      <section className={styles.ultimosLancamento}>
          <h3>Ultimos Lançamentos</h3>
          <UltimosLancamentos />
      </section>
    </div>
  )
}

export default Conteudo