import React, { useEffect } from 'react';
import './App.css';
import axiosKit from './redux/api/axiosKit';
import axios from 'axios';
import authController from './redux/api/auth';
import { Box, Stack } from '@mui/material';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import PrimarySearchAppBar from './components/layouts/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocumentManagement from './pages/document-management';
import UserManagement from './pages/user-management';
import Dashboard from './pages/dashboard';
import Setting from './pages/setting';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Stack direction={'row'}>
          <Sidebar />
          <Box flexGrow={1}>
            <Routes>
              <Route path={'/'} element={<Dashboard />} />
              <Route path={'/documents'} element={<DocumentManagement />} />
              <Route path={'/users'} element={<UserManagement />} />
              <Route path={'/setting'} element={<Setting />} />
            </Routes>
          </Box>
        </Stack>
      </BrowserRouter>
    </Box>
  );
}

export default App;
