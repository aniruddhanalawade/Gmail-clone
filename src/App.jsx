import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Shared/Navbar'
import Inbox from './Components/Inbox'
import Mail from './Components/Mail'
import Body from './Components/Body'
import Sendmail from './Components/Sendmail'
import Login from './Components/Login'
import { useSelector } from 'react-redux'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      }
    ]
  }
])
function App() {

const {user} = useSelector(Store=>Store.appSlice);

  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
      {
        !user ? (<Login />) : (
          <>
            <Navbar />
            <RouterProvider router={router} />
            <div className='absolute w-[30%] bottom-0 right-20 z-10'>
              <Sendmail />
            </div>
          </>
        )
      }
    </div>
  )
}

export default App
