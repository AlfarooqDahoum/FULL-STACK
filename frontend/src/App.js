import Home from './Home'
import About from './About'
import Nav from './components/Nav'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route 
        path='/'
        element={<Home />}
        />
        <Route 
        path='/about'
        element={<About />}
        />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
