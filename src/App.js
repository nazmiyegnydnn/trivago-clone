import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
