import React from 'react';
import NavBar from './NavBar';

function HomePage() {
    return (
      <div>
        <NavBar />
        <main className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mt-6">Welcome to my portfolio!</h1>
          <p className="text-xl text-gray-600 mt-4">This is my personal website where I showcase my projects.</p>
        </main>
      </div>
    );
  }
  
  
  export default HomePage;
