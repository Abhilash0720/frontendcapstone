import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './create';
import Login from './Login';

function App() {
  return <>
     <BrowserRouter> 
     <Login/>
     <Routes>
      <Route path='/create' element={<Create/>}/> 
     </Routes>
    </BrowserRouter>

  
  </>
}

export default App
