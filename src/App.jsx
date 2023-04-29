
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import { ToastContainer } from 'react-toastify'
import { createContext, useState } from 'react'
import Sidebar from './components/Sidebar'

export const SIDEBAR_CONTEXT = createContext()
function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const value = {toggleSidebar, setToggleSidebar}
  return (
    <SIDEBAR_CONTEXT.Provider value={value}>
      <RouterProvider router={routes}/>
      <ToastContainer
        position="top-center"
        autoClose={3001}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Sidebar/>
    </SIDEBAR_CONTEXT.Provider>
  )
}

export default App
