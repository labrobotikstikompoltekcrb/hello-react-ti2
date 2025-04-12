// Import Libraries 
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import List from './List';
// Create component
function App(){
  return (
    <div className='App'>
    <Header />
    <List />
    <Footer />
    </div>
  );
}
// Export Component
export default App;