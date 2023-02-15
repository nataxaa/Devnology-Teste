import { Header } from './components/header';
import { Home } from './page/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Registration } from './page/registration';




function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
