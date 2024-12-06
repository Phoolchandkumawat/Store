// import Hero from "./components/Body/Hero"
import Navbar from "./components/Header/Navbar"
import Sidebar from './components/Body/Sidebar'
import HotSale from './components/Body/HotSale'
import Products from './components/Body/Products'
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
      <Navbar/>
      {/* <Hero/> */}
      <div className='flex relative w-full'>
        <div className="md:flex hidden sidebar absolute top-0 left-0 w-1/5 h-[calc(100vh-64px)] border-r-2">
          <Sidebar/>
        </div>
        <div className="main w-full">
          <div className="ml-auto w-full md:w-[calc(100%-20%)]">
            {/* <HotSale/> */}
            <Outlet/>
            {/* <Products type = "moblie"/> */}
          </div>
        </div>
    </div>
    </>
  )
}

export default App
