import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import translations from "./translations";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import PostJob from './components/PostJob';
import JobList from './components/JobList';
import MyJobs from './components/MyJobs';

function App() {
  const [lang, setLang] = useState("en");

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <select onChange={(e) => setLang(e.target.value)} value={lang}>
    //       <option value="en">English</option>
    //       <option value="es">Español</option>
    //     </select>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>ConfiaPay</h1>
    //     <ConnectButton />

    //     <h3>{translations[lang].jobList}</h3>
    //     {/* screens: Post job, Job list, My jobs */}
    //   </header>
      
    // </div>
    <Router>
      <div style={{ padding: '20px' }}>
        {/* Wallet connect */}
        <ConnectButton />

        {/* Navigation */}
        <nav style={{ margin: '20px 0' }}>
          <Link to="/post">Post Job</Link> |{" "}
          <Link to="/list">Job List</Link> |{" "}
          <Link to="/myjobs">My Jobs</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/post" element={<PostJob />} />
          <Route path="/list" element={<JobList />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/" element={<JobList />} /> {/* default */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
