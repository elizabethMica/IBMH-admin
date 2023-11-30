import {Routes, Route, Navigate} from "react-router-dom";
import PostSermon from "./Components/PostSermon/PostSermon";
import GetSermon from "./Components/GetSermon/GetSermon";
function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<GetSermon/>}/>
      <Route path="/post" element={<PostSermon/>}/>
      <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App
