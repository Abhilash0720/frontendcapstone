import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Create';
import Login from './Login';
import Query from './Query';
import Createquery from './createquery'
function App() {
  

  return <>
      <BrowserRouter> 
     <Login/> 
     <Routes>
      <Route path='/create' element={<Create/>}/> 
      <Route path='/query' element={<Query/>}/>
      <Route path='/createquery' element={<Createquery/>}/>
     </Routes>
    </BrowserRouter>

    </>
  
}

export default App
