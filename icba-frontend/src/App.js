import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Contact from './pages/Contact';
import StartJourney from './pages/StartJourney';
import About from './pages/About';
import Courses from './pages/Courses';
import Admissions from './pages/Admission';
import foundationCourse from './pages/foundationCourses';
import Dashboard from './student_pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/startJourney" element={<StartJourney/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/admissions" element={<Admissions/>}/>
        <Route path="/foundationCourse" element={<foundationCourse/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
