import styles from './app.module.scss'
import Sidebar from '../components/sidebar';
import Conteudo from 'components/conteudo';

function App() {
  return (
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.conteudoPrincipal}>
        <Conteudo/>
      </main>
    </div>
  );
}

export default App;
