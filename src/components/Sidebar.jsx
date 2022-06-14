import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"  />

    <div className={styles.profile}>
      <img className={styles.avatar} src="https://github.com/caroline-medeiros.png" />
      <strong>Caroline Medeiros</strong>
      <span>Web Developer</span>
    </div>
    <footer>
      <a href="#">
        <PencilLine size={20}/>

        Editar seu perfil
      </a>
    </footer>
    </aside>
    );
}