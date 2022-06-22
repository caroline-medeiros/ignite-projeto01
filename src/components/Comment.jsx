import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="hhttps://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title='15 de junho ás 09:53h' dateTime='2022-06-15 09:58:30'> Cerca de 1h atrás</time>
                     </div>
                     <button title="Deletar comentário">
                        <Trash size={20} />
                     </button>
                </header>
                <p> Muito bom Devon, parabéns!! 👏🏻👏🏻</p>


                </div>
                <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
                </footer>
            </div>
        </div>
    )
}