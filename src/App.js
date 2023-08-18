import React from 'react';
import './display_none_scrollbar.css'
import './reset.css'
import Index from './contentComponent/Index.js';
import Footer from './commonComponent/Footer'

function App() {
  return (
    <div id='wrap'>
      <Index />
      <Footer />
    </div>
  );
}

export default App;
