import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Dashboard from './components/MainContent/Dashboard/Dashboard';

import useTheme from './hooks/useTheme';
import './App.css';

const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <Sidebar />
      <main>
        <Dashboard />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
