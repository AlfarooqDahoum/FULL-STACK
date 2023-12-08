import Navbar from "./components/Nav"
import Home from "./Home"

import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>Todo List</h1>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/'
            element={<AddTodo />}
          />
          <Route
            // dynamic :id to create custom route
            path='/'
            element={<EditTodo />}
          />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App