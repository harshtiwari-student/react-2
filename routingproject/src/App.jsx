import Home from "./components/Home"
import { Outlet } from "react-router-dom"
function App(){
  return(
    <>
    <Outlet/>
    </>
  )
}

export default App