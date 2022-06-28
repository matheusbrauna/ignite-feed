import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Henrique</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-06-27 16:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
