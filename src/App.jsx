import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'

function App() {

  return (
    <RouterProvider router={router} />
    // <div id="container">
    //   <h1>Hello React Router!</h1>
    //   <div id="navbar">{/* navigation here */}</div>
    //   <div id="main-section">{/* routes here */}</div>
    // </div>
  )
}

export default App
