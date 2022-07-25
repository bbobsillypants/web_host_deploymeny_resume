import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import AppPages from './pages/AppsPage';
import Resume from './pages/Resume';
import Header from './components/ui/Header';


function App() {
  return (
    <div>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/App" element={<AppPages />} exact/>
        <Route path="/Resume" element={<Resume />} exact/>
        
    </Routes>
    </div>
  );
}

export default App;
