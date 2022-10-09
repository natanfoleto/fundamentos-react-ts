import { Header } from "./components/Header"

import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/natanfoleto.png',
      name: 'Natan Foleto',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é CarWash 🚀' },
      { type: 'link', content: 'natanfoleto./design/carwash' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-09-28 08:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é CarWash 🚀' },
      { type: 'link', content: 'natanfoleto./design/carwash' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-09-11 15:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          { posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )) }
        </main>
      </div>
    </div>
  )
}

export default App
