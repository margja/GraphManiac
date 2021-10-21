import React from 'react'

// Theme import
import './App.min.css';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
      <Layout sidebar={{ id: 'accordionSidebar' }} header={{ id: 'staticHeader' }} />
  );
}

export default App
