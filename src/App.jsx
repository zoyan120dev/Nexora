import {BrowserRouter,  Routes, Route}  from "react-router-dom"
import NavbarArea from "./component/Navbar";
import {Button} from "@heroui/react";
import Home from "./component/Home";


function App() {


  return (
    <>
      <BrowserRouter>
      <NavbarArea/>
         <Routes>
          <Route path="/" element={<Home/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
