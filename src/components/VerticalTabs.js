import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { About } from '../pages/About';
import { Portfolio } from '../pages/Portfolio';
import { WritingSamples } from '../pages/WritingSamples';

export function VerticalTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (location.pathname === '/portfolio') {
      setTab(1);
    } else if (location.pathname === '/writingsamples') {
      setTab(2);
    } else {
      setTab(0);
    }
  }, [location.pathname]);

  const handleChangeTabs = (_, newValue) => {
    if (newValue === 0) {
      navigate('/');
    } else if (newValue === 1) {
      navigate('/portfolio');
    } else if (newValue === 2) {
      navigate('/writingsamples');
    }
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: '100vh' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tab}
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
        <Tab
          label="Writing Samples"
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
          <Route exact path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/writingsamples" element={<WritingSamples />} />
        </Routes>
      </Box>
    </Box>
  );
}
