import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Players, PlayerDetail, Profile, Talk, Bookmark, NotFound } from '@/pages';
import AppLayout from '@/components/AppLayout';

const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#001487",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/talk" element={<Talk />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/players/:id" element={<PlayerDetail />} />
            <Route path="/players" element={<Players />} />
            <Route path="/" element={<Home />} />
            <Route element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
