import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { VerticalTabs } from './components/VerticalTabs';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <VerticalTabs />
    </Router>
  );
}
