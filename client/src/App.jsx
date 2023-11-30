import {Routes, Route, Navigate} from "react-router-dom";
import PostSermon from "./Components/PostSermon/PostSermon"
function App() {
 

  return (
    <>
      <Routes>
      <Route path="/" element={<PostSermon/>}/>
      <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App
