import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import HeaderComponent from './components/HeaderComponent'
function App() {

  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Page = route.element
          const Main = () => (
            <div className="app">
              <HeaderComponent />
              <Page />
            </div>
          )
          return (
            <Route key={route.path} path={route.path} element={<Main />} />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App