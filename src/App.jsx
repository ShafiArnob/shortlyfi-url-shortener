
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
