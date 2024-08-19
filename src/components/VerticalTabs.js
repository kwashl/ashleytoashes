import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { About } from '../pages/About';
import { Portfolio } from '../pages/Portfolio';

export function VerticalTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialTabValue = location.pathname === '/portfolio' ? 1 : 0;
  const [value, setValue] = useState(initialTabValue);

  useEffect(() => {
    if (location.pathname === '/portfolio') {
      setValue(1);
    } else {
      setValue(0);
    }
  }, [location.pathname]);

  const handleChangeTabs = (_, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/');
    } else if (newValue === 1) {
      navigate('/portfolio');
    }
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: '100vh' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChangeTabs}
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          width: '300px',
          minWidth: '300px',
        }}
      >
        <Tab
          label="About"
          sx={{
            height: '90px',
            minHeight: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Tab
          label="Portfolio"
          sx={{
            height: '90px',
            minHeight: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </Tabs>
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Box>
    </Box>
  );
}
