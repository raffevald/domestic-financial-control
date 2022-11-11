import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Modal from 'react-modal';

import TopBar from './components/topBar';
import SideBar from './components/sideBar';
import { Dashboard } from './pages/dashboard';
import { CardPage } from './pages/MeioDePagamentos';
import { Expenses } from './pages/expenses'; 


Modal.setAppElement('#root');

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <SideBar isSidebar={isSidebar} />
          <main className='content'>
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/saidas" element={<Expenses />} />
              <Route path="/cartao" element={<CardPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
