import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Articles from './pages/Articles/Articles.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/articles' element={<Articles />}></Route>
    </Routes>
  );
}

export default App;
