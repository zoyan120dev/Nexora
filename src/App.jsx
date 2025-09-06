import {BrowserRouter,  Routes, Route}  from "react-router-dom"

function App() {


  return (
    <>
    <h1 className="text-center text-red-500 text-3xl font-bold">hello</h1>
      <BrowserRouter>
         <Routes>
          <Route path="/"/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
