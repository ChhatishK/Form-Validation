
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormComponent from './Components/FormComponents';
import SuccessPage from './Components/SuccessPage';

function App() {

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      

      <Routes>
        <Route path='/' element={<FormComponent />}></Route>
        <Route path='/success' element={<SuccessPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
