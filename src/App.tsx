import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/Input'
import './styles/main.scss'
import { Link, useLocation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const pageNames = ["Главная", "Спорт", "Музыка", "Фильмы", "Телепередачи", "Новости", "Блоги", "Животные", "Трансляции", "Обзоры", "В тренде"]
  const pages = ['/', '/sport', '/music', '/movies', '/tv-shows', '/news', '/blogs', '/wildlife', '/livestreams', '/reviews', '/trends']

  const {pathname} = useLocation()

  return (
    <>
      <header></header>
      <main>
        <aside>
          <h2>
            Категории
          </h2>
          <ul>
            {
              pages.map(page => page === pathname ?
                <li>
                  {pageNames[pages.indexOf(page)]}
                </li> :
                <Link to={page}>
                  {pageNames[pages.indexOf(page)]}<br />
                </Link>)
            }
          </ul>
        </aside>
      </main>
    </>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>

    //   <div className="card">
    //     <Input/>
    //   </div>

    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
