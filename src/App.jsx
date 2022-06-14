
import {Post} from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'


export function App() {


  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego Fernandes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cum aut culpa aspernatur quos ut 
            inventore repellat! Alias nemo veniam quae dolores adipisci sed officiis rerum voluptatibus, ipsam possimus sunt."
          />

        <Post 
            author="Caroline Medeiros"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cum aut culpa aspernatur quos ut 
            inventore repellat! Alias nemo veniam quae dolores adipisci sed officiis rerum voluptatibus, ipsam possimus sunt."
          />


        </main>
      </div>
    </div>
  )
}



export default App
