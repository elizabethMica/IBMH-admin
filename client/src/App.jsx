import {Routes, Route, Navigate} from "react-router-dom";
import PostSermon from "./Components/PostSermon/PostSermon";
import GetSermon from "./Components/GetSermon/GetSermon";
import Navbar from "./Components/Navbar/Navbar";
function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/sermones" element={<GetSermon/>}/>
      <Route path="/post-sermon" element={<PostSermon/>}/>
      <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App
