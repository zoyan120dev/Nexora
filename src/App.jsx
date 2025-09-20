import {BrowserRouter,  Routes, Route}  from "react-router-dom"
import NavbarArea from "./component/Navbar";
import {Button} from "@heroui/react";
import Home from "./component/Home";
import SinginForm from "./_auth/forms/Login";
import Singup from "./loginLogut/Singup";
import ReelSection from "./Reel/Reel";
import Main from "./Reel/Main";


function App() {


  return (
    <>
     <main className="flex h-screen">
       <BrowserRouter>
      {/* <NavbarArea/> */}
         <Routes>
          <Route path="/" element={<SinginForm/>}/>
          <Route path="/signup" element={<Singup/>}/>
          <Route path="/home" element={<Home/>}/>
         <Route path="/reelsection" element={<Main/>}/>
         </Routes>
      </BrowserRouter>
     </main>
    </>
  )
}

export default App;
