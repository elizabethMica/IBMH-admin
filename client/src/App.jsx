import {Routes, Route, Navigate} from "react-router-dom";
import PostSermon from "./Components/PostSermon/PostSermon";
import GetSermon from "./Components/GetSermon/GetSermon";
import Navbar from "./Components/Navbar/Navbar";
import SermonDetail from "./Components/SermonDetail/SermonDetail";
import UpdateSermon from "./Components/UpdateSermon/UpdateSermon";
import GetContact from "./Components/GetContact/GetContact";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
// import ContactDetail from "./Components/ContactDetail/ContactDetail";

function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/sermones" element={<GetSermon/>}/>
      <Route path="/post-sermon" element={<PostSermon/>}/>
      <Route path="/sermon/:id" element={<SermonDetail/>}/>
      <Route path="/update-sermon/:id" element={<UpdateSermon/>}/>
      <Route path="/contacts" element={<GetContact/>}/>
      {/* <Route path="/contacts/:id" element={<ContactDetail/>}/> */}
      <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    <Footer/>  
    </>
  )
}

export default App
