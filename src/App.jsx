import {BrowserRouter,  Routes, Route}  from "react-router-dom"
import NavbarArea from "./component/Navbar";
import {Button} from "@heroui/react";
import Home from "./component/Home";
import SinginForm from "./_auth/forms/Login";


function App() {


  return (
    <>
     <main className="flex h-screen">
       <BrowserRouter>
      {/* <NavbarArea/> */}
         <Routes>
          <Route path="/" element={<SinginForm/>}/>
         </Routes>
      </BrowserRouter>
     </main>
    </>
  )
}

export default App;
