import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './styles/global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Matheus Henrique"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus laboriosam, libero doloremque ducimus quos ratione numquam. Magni sequi minima amet illum est iure, incidunt nemo voluptas inventore aspernatur non."
          />
          <Post
            author="João"
            content="Lorem ipsum dolor sit amet consectetur"
          />
        </main>
      </div>
    </div>
  );
}
